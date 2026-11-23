
import { useMemo, useState, type FormEvent } from "react";
import {
  FileText, Plus, Search, Download, X, Eye, Pencil,
  CalendarDays, Building2, ShieldCheck, Clock3, AlertTriangle,
  CheckCircle2, DollarSign, Users, ClipboardList
} from "lucide-react";
import "./contracts/contracts.css";

type ContractStatus = "Draft" | "Active" | "Expiring" | "Expired" | "Terminated";
type PaymentStatus = "Paid" | "Pending" | "Overdue";

type Contract = {
  id: string;
  client: string;
  title: string;
  service: string;
  site: string;
  startDate: string;
  endDate: string;
  guards: number;
  monthlyFee: number;
  currency: "MMK" | "USD";
  status: ContractStatus;
  slaResponse: number;
  slaCoverage: number;
  billingDay: number;
  paymentStatus: PaymentStatus;
  contactPerson: string;
  notes: string;
};

const STORAGE_KEY = "apexive_contracts_v1";
const today = new Date().toISOString().slice(0, 10);

const seedContracts: Contract[] = [
  {
    id: "AGS-CTR-001", client: "Apexive Tower Management",
    title: "Corporate Facility Security Agreement", service: "Guard Services",
    site: "Apexive Tower", startDate: "2026-01-01", endDate: "2027-01-01",
    guards: 12, monthlyFee: 4800000, currency: "MMK", status: "Active",
    slaResponse: 10, slaCoverage: 98, billingDay: 1, paymentStatus: "Paid",
    contactPerson: "Operations Manager", notes: "24/7 facility guard coverage."
  },
  {
    id: "AGS-CTR-002", client: "North Industrial Logistics",
    title: "Warehouse CCTV & Guard Services", service: "CCTV + Guard Services",
    site: "North Warehouse", startDate: "2026-03-01", endDate: "2026-12-15",
    guards: 8, monthlyFee: 3200000, currency: "MMK", status: "Expiring",
    slaResponse: 15, slaCoverage: 97, billingDay: 5, paymentStatus: "Pending",
    contactPerson: "Facility Supervisor", notes: "CCTV maintenance and site patrol."
  },
  {
    id: "AGS-CTR-003", client: "Golden City Residence",
    title: "Residential Security Service", service: "Guard Services",
    site: "Golden City Residence", startDate: "2026-06-01", endDate: "2027-06-01",
    guards: 10, monthlyFee: 2500, currency: "USD", status: "Active",
    slaResponse: 12, slaCoverage: 99, billingDay: 10, paymentStatus: "Overdue",
    contactPerson: "Property Manager", notes: "Residential gate and visitor security."
  }
];

function loadContracts(): Contract[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) as Contract[] : seedContracts;
  } catch {
    return seedContracts;
  }
}

function makeContractId() {
  return `AGS-CTR-${Date.now().toString().slice(-7)}`;
}

function getContractStatus(contract: Contract): ContractStatus {
  if (contract.status === "Draft" || contract.status === "Terminated") return contract.status;
  const now = new Date();
  const end = new Date(`${contract.endDate}T23:59:59`);
  if (end < now) return "Expired";
  const days = Math.ceil((end.getTime() - now.getTime()) / 86400000);
  return days <= 45 ? "Expiring" : "Active";
}

const emptyForm = {
  client: "", title: "", service: "Guard Services", site: "",
  startDate: today, endDate: "", guards: "1", monthlyFee: "",
  currency: "MMK" as "MMK" | "USD", slaResponse: "15",
  slaCoverage: "98", billingDay: "1", paymentStatus: "Pending" as PaymentStatus,
  contactPerson: "", notes: ""
};

export default function ContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>(loadContracts);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [modal, setModal] = useState<"create" | "edit" | "view" | null>(null);
  const [selected, setSelected] = useState<Contract | null>(null);
  const [form, setForm] = useState(emptyForm);

  const persist = (items: Contract[]) => {
    setContracts(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const enriched = useMemo(
    () => contracts.map(c => ({ ...c, currentStatus: getContractStatus(c) })),
    [contracts]
  );

  const filtered = enriched.filter(c => {
    const q = search.toLowerCase();
    const matchesSearch = `${c.id} ${c.client} ${c.title} ${c.site}`.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "All" || c.currentStatus === statusFilter;
    const matchesPayment = paymentFilter === "All" || c.paymentStatus === paymentFilter;
    return matchesSearch && matchesStatus && matchesPayment;
  });

  const activeCount = enriched.filter(c => c.currentStatus === "Active").length;
  const expiringCount = enriched.filter(c => c.currentStatus === "Expiring").length;
  const overdueCount = contracts.filter(c => c.paymentStatus === "Overdue").length;
  const totalGuards = contracts.filter(c => !["Expired", "Terminated", "Draft"].includes(getContractStatus(c))).reduce((sum, c) => sum + c.guards, 0);

  const openCreate = () => {
    setSelected(null);
    setForm(emptyForm);
    setModal("create");
  };

  const openEdit = (contract: Contract) => {
    setSelected(contract);
    setForm({
      client: contract.client, title: contract.title, service: contract.service,
      site: contract.site, startDate: contract.startDate, endDate: contract.endDate,
      guards: String(contract.guards), monthlyFee: String(contract.monthlyFee),
      currency: contract.currency, slaResponse: String(contract.slaResponse),
      slaCoverage: String(contract.slaCoverage), billingDay: String(contract.billingDay),
      paymentStatus: contract.paymentStatus, contactPerson: contract.contactPerson,
      notes: contract.notes
    });
    setModal("edit");
  };

  const saveContract = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.client.trim() || !form.title.trim() || !form.endDate) return;
    if (new Date(form.endDate) < new Date(form.startDate)) {
      alert("Contract end date must be after the start date.");
      return;
    }

    const existing = selected;
    const item: Contract = {
      id: existing?.id ?? makeContractId(),
      client: form.client.trim(), title: form.title.trim(),
      service: form.service, site: form.site.trim(),
      startDate: form.startDate, endDate: form.endDate,
      guards: Math.max(0, Number(form.guards) || 0),
      monthlyFee: Math.max(0, Number(form.monthlyFee) || 0),
      currency: form.currency,
      status: existing?.status ?? "Active",
      slaResponse: Math.max(0, Number(form.slaResponse) || 0),
      slaCoverage: Math.min(100, Math.max(0, Number(form.slaCoverage) || 0)),
      billingDay: Math.min(28, Math.max(1, Number(form.billingDay) || 1)),
      paymentStatus: form.paymentStatus,
      contactPerson: form.contactPerson.trim(), notes: form.notes.trim()
    };

    persist(existing
      ? contracts.map(c => c.id === existing.id ? item : c)
      : [item, ...contracts]
    );
    setModal(null);
    setSelected(null);
  };

  const updatePayment = (contract: Contract, status: PaymentStatus) => {
    persist(contracts.map(c => c.id === contract.id ? { ...c, paymentStatus: status } : c));
    if (selected?.id === contract.id) setSelected({ ...contract, paymentStatus: status });
  };

  const exportCSV = () => {
    const header = ["Contract ID", "Client", "Contract Title", "Service", "Site", "Start Date", "End Date", "Guards", "Monthly Fee", "Currency", "Status", "SLA Response Minutes", "SLA Coverage %", "Billing Day", "Payment Status"];
    const rows = filtered.map(c => [
      c.id, c.client, c.title, c.service, c.site, c.startDate, c.endDate,
      String(c.guards), String(c.monthlyFee), c.currency, c.currentStatus,
      String(c.slaResponse), String(c.slaCoverage), String(c.billingDay), c.paymentStatus
    ]);
    const csv = [header, ...rows].map(row =>
      row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
    ).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "apexive-contract-register.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const statusClass = (value: string) => value.toLowerCase().replaceAll(" ", "-");
  const money = (value: number, currency: string) =>
    `${currency === "MMK" ? "MMK " : "USD "}${value.toLocaleString()}`;

  return (
    <div className="contracts-page">
      <div className="contracts-heading">
        <div>
          <div className="contracts-eyebrow"><ShieldCheck size={14} /> COMMERCIAL GOVERNANCE / CLIENT SERVICES</div>
          <h1>Contracts & Client SLA</h1>
          <p>Manage service agreements, contract terms, SLA commitments and billing schedules.</p>
        </div>
        <div className="contracts-heading-actions">
          <button className="contracts-btn secondary" onClick={exportCSV}><Download size={16} /> Export Register</button>
          <button className="contracts-btn primary" onClick={openCreate}><Plus size={16} /> New Contract</button>
        </div>
      </div>

      <div className="contracts-notice">
        <AlertTriangle size={16} />
        <span>Prototype records only. Contract execution, legal approval, invoicing and payment collection are not connected.</span>
      </div>

      <div className="contracts-metrics">
        <div className="contracts-metric"><span className="contract-metric-icon blue"><FileText /></span><div><small>TOTAL CONTRACTS</small><strong>{contracts.length}</strong><em>All recorded agreements</em></div></div>
        <div className="contracts-metric"><span className="contract-metric-icon green"><CheckCircle2 /></span><div><small>ACTIVE CONTRACTS</small><strong>{activeCount}</strong><em>Currently within term</em></div></div>
        <div className="contracts-metric"><span className="contract-metric-icon amber"><Clock3 /></span><div><small>EXPIRING SOON</small><strong>{expiringCount}</strong><em>Within 45 days</em></div></div>
        <div className="contracts-metric"><span className="contract-metric-icon purple"><Users /></span><div><small>GUARDS ALLOCATED</small><strong>{totalGuards}</strong><em>Across current contracts</em></div></div>
      </div>

      <div className="contracts-toolbar">
        <div className="contracts-search"><Search size={16} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search contract, client or site..." /></div>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option><option>Draft</option><option>Active</option><option>Expiring</option><option>Expired</option><option>Terminated</option>
        </select>
        <select value={paymentFilter} onChange={e => setPaymentFilter(e.target.value)}>
          <option>All</option><option>Paid</option><option>Pending</option><option>Overdue</option>
        </select>
      </div>

      <section className="contracts-panel">
        <div className="contracts-panel-heading">
          <div><h2>Client Contract Register</h2><p>{filtered.length} agreement(s) shown</p></div>
          <span className="contracts-register-label"><ClipboardList size={14} /> CONTRACT REGISTER</span>
        </div>
        <div className="contracts-table-wrap">
          <table className="contracts-table">
            <thead><tr><th>CONTRACT / CLIENT</th><th>SERVICE</th><th>SITE</th><th>CONTRACT TERM</th><th>GUARDS</th><th>MONTHLY FEE</th><th>STATUS</th><th>PAYMENT</th><th /></tr></thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td><strong className="contract-id">{c.id}</strong><span className="contract-client">{c.client}</span><small>{c.title}</small></td>
                  <td>{c.service}</td>
                  <td>{c.site || "—"}</td>
                  <td><span className="contract-dates">{c.startDate}</span><span className="contract-dates">to {c.endDate}</span></td>
                  <td>{c.guards}</td>
                  <td className="contract-fee">{money(c.monthlyFee, c.currency)}</td>
                  <td><span className={`contract-status ${statusClass(c.currentStatus)}`}>{c.currentStatus}</span></td>
                  <td><span className={`contract-status ${statusClass(c.paymentStatus)}`}>{c.paymentStatus}</span></td>
                  <td><div className="contract-row-actions"><button title="View contract" onClick={() => { setSelected(c); setModal("view"); }}><Eye size={15} /></button><button title="Edit contract" onClick={() => openEdit(c)}><Pencil size={15} /></button></div></td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={9} className="contracts-empty">No contracts match your search.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>

      <div className="contracts-bottom-grid">
        <section className="contracts-panel">
          <div className="contracts-panel-heading"><div><h2>Contract Renewal Watch</h2><p>Agreements approaching expiry</p></div><CalendarDays size={18} /></div>
          {enriched.filter(c => c.currentStatus === "Expiring" || c.currentStatus === "Expired").sort((a, b) => a.endDate.localeCompare(b.endDate)).length === 0
            ? <div className="contracts-empty">No contracts approaching expiry.</div>
            : enriched.filter(c => c.currentStatus === "Expiring" || c.currentStatus === "Expired").sort((a, b) => a.endDate.localeCompare(b.endDate)).map(c => (
              <div className="renewal-item" key={c.id}>
                <span className="renewal-icon"><CalendarDays size={17} /></span>
                <div><strong>{c.client}</strong><small>{c.id} · {c.title}</small><span>Expires: {c.endDate}</span></div>
                <span className={`contract-status ${statusClass(c.currentStatus)}`}>{c.currentStatus}</span>
              </div>
            ))}
        </section>
        <section className="contracts-panel">
          <div className="contracts-panel-heading"><div><h2>Payment Monitoring</h2><p>Recorded billing status</p></div><DollarSign size={18} /></div>
          <div className="payment-summary">
            <div><span className="payment-dot paid" /><span>Paid</span><strong>{contracts.filter(c => c.paymentStatus === "Paid").length}</strong></div>
            <div><span className="payment-dot pending" /><span>Pending</span><strong>{contracts.filter(c => c.paymentStatus === "Pending").length}</strong></div>
            <div><span className="payment-dot overdue" /><span>Overdue</span><strong>{overdueCount}</strong></div>
          </div>
          <p className="payment-footnote">Payment status is manually maintained in this prototype. No bank or payment gateway is connected.</p>
        </section>
      </div>

      {modal === "create" || modal === "edit" ? (
        <div className="contracts-modal-backdrop" onClick={() => setModal(null)}>
          <form className="contracts-modal" onSubmit={saveContract} onClick={e => e.stopPropagation()}>
            <div className="contracts-modal-head"><div><h2>{modal === "create" ? "Create Client Contract" : "Edit Client Contract"}</h2><p>Enter agreement and service information</p></div><button type="button" onClick={() => setModal(null)}><X /></button></div>
            <div className="contracts-form-grid">
              <label className="wide">Client / Organization<input required value={form.client} onChange={e => setForm({ ...form, client: e.target.value })} placeholder="Client legal name" /></label>
              <label className="wide">Contract Title<input required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Service agreement title" /></label>
              <label>Service Type<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option>Guard Services</option><option>CCTV Installation</option><option>CCTV Maintenance</option><option>CCTV + Guard Services</option><option>VIP Protection</option><option>Security Consulting</option><option>Integrated Security Services</option></select></label>
              <label>Site / Facility<input value={form.site} onChange={e => setForm({ ...form, site: e.target.value })} placeholder="Service location" /></label>
              <label>Start Date<input type="date" required value={form.startDate} onChange={e => setForm({ ...form, startDate: e.target.value })} /></label>
              <label>End Date<input type="date" required value={form.endDate} onChange={e => setForm({ ...form, endDate: e.target.value })} /></label>
              <label>Guard Requirement<input type="number" min="0" value={form.guards} onChange={e => setForm({ ...form, guards: e.target.value })} /></label>
              <label>Monthly Fee<input type="number" min="0" value={form.monthlyFee} onChange={e => setForm({ ...form, monthlyFee: e.target.value })} placeholder="0" /></label>
              <label>Currency<select value={form.currency} onChange={e => setForm({ ...form, currency: e.target.value as "MMK" | "USD" })}><option>MMK</option><option>USD</option></select></label>
              <label>Billing Day (1–28)<input type="number" min="1" max="28" value={form.billingDay} onChange={e => setForm({ ...form, billingDay: e.target.value })} /></label>
              <label>SLA Response Target (minutes)<input type="number" min="0" value={form.slaResponse} onChange={e => setForm({ ...form, slaResponse: e.target.value })} /></label>
              <label>SLA Coverage Target (%)<input type="number" min="0" max="100" value={form.slaCoverage} onChange={e => setForm({ ...form, slaCoverage: e.target.value })} /></label>
              <label>Payment Status<select value={form.paymentStatus} onChange={e => setForm({ ...form, paymentStatus: e.target.value as PaymentStatus })}><option>Pending</option><option>Paid</option><option>Overdue</option></select></label>
              <label>Client Contact Person<input value={form.contactPerson} onChange={e => setForm({ ...form, contactPerson: e.target.value })} placeholder="Contact person / role" /></label>
              <label className="wide">Notes / Service Scope<textarea rows={3} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe scope, shifts, service conditions and special requirements..." /></label>
            </div>
            <div className="contracts-modal-actions"><button type="button" className="contracts-btn secondary" onClick={() => setModal(null)}>Cancel</button><button className="contracts-btn primary"><Plus size={15} /> {modal === "create" ? "Create Contract" : "Save Changes"}</button></div>
          </form>
        </div>
      ) : null}

      {modal === "view" && selected && (
        <div className="contracts-modal-backdrop" onClick={() => setModal(null)}>
          <div className="contracts-modal contract-detail-modal" onClick={e => e.stopPropagation()}>
            <div className="contracts-modal-head"><div><h2>Contract Overview</h2><p>{selected.id}</p></div><button onClick={() => setModal(null)}><X /></button></div>
            <div className="contract-detail-title"><Building2 size={22} /><div><strong>{selected.client}</strong><span>{selected.title}</span></div></div>
            <div className="contract-detail-grid">
              <div><small>SERVICE</small><strong>{selected.service}</strong></div>
              <div><small>SITE / FACILITY</small><strong>{selected.site || "Not specified"}</strong></div>
              <div><small>CONTRACT START</small><strong>{selected.startDate}</strong></div>
              <div><small>CONTRACT END</small><strong>{selected.endDate}</strong></div>
              <div><small>GUARD REQUIREMENT</small><strong>{selected.guards}</strong></div>
              <div><small>MONTHLY FEE</small><strong>{money(selected.monthlyFee, selected.currency)}</strong></div>
              <div><small>SLA RESPONSE TARGET</small><strong>{selected.slaResponse} minutes</strong></div>
              <div><small>SLA COVERAGE TARGET</small><strong>{selected.slaCoverage}%</strong></div>
              <div><small>BILLING DAY</small><strong>{selected.billingDay} of each month</strong></div>
              <div><small>PAYMENT STATUS</small><strong>{selected.paymentStatus}</strong></div>
              <div><small>CLIENT CONTACT</small><strong>{selected.contactPerson || "Not specified"}</strong></div>
            </div>
            <div className="contract-notes"><small>SERVICE SCOPE / NOTES</small><p>{selected.notes || "No notes recorded."}</p></div>
            <label className="payment-update-label">Update payment status<select value={selected.paymentStatus} onChange={e => updatePayment(selected, e.target.value as PaymentStatus)}><option>Pending</option><option>Paid</option><option>Overdue</option></select></label>
            <div className="contracts-modal-actions"><button className="contracts-btn secondary" onClick={() => openEdit(selected)}><Pencil size={15} /> Edit Contract</button><button className="contracts-btn primary" onClick={() => setModal(null)}>Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
}
