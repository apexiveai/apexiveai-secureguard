
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Building2,
  Factory,
  Users,
  Shield,
  Award,
  ClipboardCheck,
  BadgeCheck,
  Menu,
  X,
  UserCheck,
  Siren,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  service: "Corporate Security",
  guards: "2",
  shift: "Day Shift",
  duration: "Monthly",
  startDate: "",
  details: "",
};

const categories = [
  {
    icon: Building2,
    title: "Corporate Security",
    desc: "Professional guarding for offices, commercial buildings and corporate facilities.",
    tags: ["Office Buildings", "Reception Security", "Access Control"],
  },
  {
    icon: Factory,
    title: "Industrial Security",
    desc: "Security personnel for factories, warehouses, construction sites and industrial zones.",
    tags: ["Factories", "Warehouses", "Construction Sites"],
  },
  {
    icon: Users,
    title: "Event & VIP Security",
    desc: "Dedicated personnel for private functions, corporate events and special assignments.",
    tags: ["Events", "VIP Protection", "Crowd Management"],
  },
  {
    icon: Shield,
    title: "Residential Security",
    desc: "Security coverage for residential properties, apartments and gated communities.",
    tags: ["Residential", "Condominiums", "Property Protection"],
  },
];

const profiles = [
  {
    id: "SG-001",
    title: "Corporate Security Officer",
    type: "Corporate",
    experience: "Experienced personnel",
    skills: ["Access Control", "Visitor Management", "Patrol"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85",
  },
  {
    id: "SG-002",
    title: "Industrial Security Officer",
    type: "Industrial",
    experience: "Industrial site assignment",
    skills: ["Perimeter Patrol", "Site Security", "Reporting"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=85",
  },
  {
    id: "SG-003",
    title: "Event Security Personnel",
    type: "Event",
    experience: "Event security assignment",
    skills: ["Crowd Control", "Guest Safety", "Coordination"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=85",
  },
];

const packages = [
  {
    name: "Day Shift",
    subtitle: "DAYTIME SECURITY COVERAGE",
    duration: "8–12 hours",
    description: "For businesses requiring daytime security operations.",
    features: [
      "Dedicated guard deployment",
      "Entry and exit monitoring",
      "Visitor registration",
      "Daily activity reporting",
    ],
  },
  {
    name: "Night Shift",
    subtitle: "OVERNIGHT SECURITY COVERAGE",
    duration: "8–12 hours",
    featured: true,
    description: "For facilities requiring overnight property protection.",
    features: [
      "Night duty deployment",
      "Scheduled security patrol",
      "Perimeter monitoring",
      "Incident escalation",
    ],
  },
  {
    name: "24/7 Protection",
    subtitle: "CONTINUOUS SECURITY COVERAGE",
    duration: "24 hours",
    description: "Continuous coverage through scheduled shifts.",
    features: [
      "Shift rotation planning",
      "Continuous guard coverage",
      "Duty handover procedures",
      "Operations coordination",
    ],
  },
];

export default function SecurityGuardsPage() {
  const { language } = useLanguage();
  const my = language === "my";

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const t = {
    nav: {
      home: my ? "ပင်မစာမျက်နှာ" : "Home",
      about: my ? "ကျွန်ုပ်တို့အကြောင်း" : "About Us",
      guards: my ? "လုံခြုံရေးဝန်ထမ်းများ" : "Security Guards",
      cctv: my ? "CCTV ဆိုင်" : "CCTV Shop",
      services: my ? "ဝန်ဆောင်မှုများ" : "Services",
      packages: my ? "အစီအစဉ်များ" : "Packages",
      hire: my ? "လုံခြုံရေးဝန်ထမ်း ငှားရမ်းရန်" : "Hire Security Guards",
    },
    top: my
      ? "ကျွမ်းကျင်သော လူအင်အားနှင့် လုံခြုံရေးဝန်ဆောင်မှုများ"
      : "PROFESSIONAL MANPOWER & SECURITY SERVICES",
    operations: my ? "လုံခြုံရေးလုပ်ငန်းနှင့် ပံ့ပိုးမှု" : "SECURITY OPERATIONS & SUPPORT",
    heroBadge: my ? "လုံခြုံရေးဝန်ထမ်း ဝန်ဆောင်မှုများ" : "MANNED GUARDING SERVICES",
    professional: my ? "ကျွမ်းကျင်သော" : "Professional",
    personnel: my ? "လုံခြုံရေးဝန်ထမ်းများ။" : "Security Personnel.",
    heroDesc: my
      ? "ရုံးလုပ်ငန်းများ၊ စက်မှုလုပ်ငန်းများ၊ လူနေအိမ်ရာများနှင့် အခမ်းအနားများအတွက် ယုံကြည်စိတ်ချရသော လုံခြုံရေးဝန်ထမ်းဝန်ဆောင်မှုများ ပံ့ပိုးပေးပါသည်။ သင့်လိုအပ်ချက်နှင့်ကိုက်ညီသော လုံခြုံရေးအဖွဲ့ကို ဖွဲ့စည်းနိုင်ပါသည်။"
      : "Reliable manpower solutions for corporate offices, industrial facilities, residential properties and events. Build a professional security team around your requirements.",
    hirePersonnel: my ? "လုံခြုံရေးဝန်ထမ်း ငှားရမ်းရန်" : "Hire Security Personnel",
    explore: my ? "ဝန်ဆောင်မှုများ လေ့လာရန်" : "Explore Services",
    professionalLabel: my ? "ကျွမ်းကျင်မှု" : "Professional",
    standards: my ? "ဝန်ထမ်းစံနှုန်းများ" : "Personnel Standards",
    flexible: my ? "ပြောင်းလွယ်ပြင်လွယ်" : "Flexible",
    scheduling: my ? "တာဝန်ချိန် စီစဉ်မှု" : "Shift Scheduling",
    coordinated: my ? "ညှိနှိုင်းဆောင်ရွက်မှု" : "Coordinated",
    incident: my ? "ဖြစ်စဉ်တုံ့ပြန်မှု" : "Incident Response",
    deployment: my ? "လုံခြုံရေးဝန်ဆောင်မှု အမျိုးအစားများ" : "SECURITY DEPLOYMENT",
    environment: my ? "ပတ်ဝန်းကျင်တိုင်းအတွက် လုံခြုံရေး" : "Security for Every Environment",
    environmentDesc: my
      ? "လုပ်ငန်းပတ်ဝန်းကျင်တစ်ခုစီတွင် မတူညီသော လုံခြုံရေးအစီအစဉ်များ လိုအပ်ပါသည်။ သင့်လုပ်ငန်းလိုအပ်ချက်နှင့် ကိုက်ညီသော ဝန်ဆောင်မှုကို ရွေးချယ်ပါ။"
      : "Different environments require different security strategies. Select the service that matches your operational needs.",
    requestService: my ? "ဝန်ဆောင်မှု တောင်းဆိုရန်" : "Request Service",
    capabilities: my ? "ကျွမ်းကျင်မှုနှင့် လုပ်ဆောင်နိုင်စွမ်းများ" : "PROFESSIONAL CAPABILITIES",
    moreThan: my ? "ဝန်ထမ်းချထားပေးခြင်း" : "More Than Just",
    deploymentText: my ? "တစ်ခုတည်းမဟုတ်ပါ။" : "Guard Deployment.",
    capabilityDesc: my
      ? "စနစ်တကျ လုံခြုံရေးလုပ်ငန်းတစ်ခုအတွက် ဝန်ထမ်းများ၊ ရှင်းလင်းသော လုပ်ထုံးလုပ်နည်းများ၊ ကြီးကြပ်မှုနှင့် ထိရောက်သော ဆက်သွယ်ရေးများ လိုအပ်ပါသည်။"
      : "A structured security operation requires personnel, clear procedures, supervision and proper communication.",
    discuss: my ? "သင့်လိုအပ်ချက်များ ဆွေးနွေးရန်" : "Discuss Your Requirements",
    personnelSection: my ? "ကျွန်ုပ်တို့၏ ဝန်ထမ်းများ" : "OUR PERSONNEL",
    profilesTitle: my ? "လုံခြုံရေးဝန်ထမ်း အမျိုးအစားများ" : "Security Personnel Profiles",
    profilesDesc: my
      ? "ရရှိနိုင်သော လုံခြုံရေးဝန်ထမ်း အမျိုးအစားများနှင့် လုပ်ဆောင်နိုင်စွမ်းများကို လေ့လာနိုင်ပါသည်။"
      : "Explore representative security personnel categories and capabilities.",
    all: my ? "အားလုံး" : "All",
    corporate: my ? "ရုံးလုပ်ငန်း" : "Corporate",
    industrial: my ? "စက်မှုလုပ်ငန်း" : "Industrial",
    event: my ? "အခမ်းအနား" : "Event",
    experience: my ? "လုပ်ငန်းအတွေ့အကြုံရှိ ဝန်ထမ်း" : "Experienced personnel",
    industrialAssignment: my ? "စက်မှုလုပ်ငန်းခွင် တာဝန်ထမ်းဆောင်မှု" : "Industrial site assignment",
    eventAssignment: my ? "အခမ်းအနား လုံခြုံရေးတာဝန်" : "Event security assignment",
    requestPersonnel: my ? "ဝန်ထမ်း တောင်းဆိုရန်" : "Request Personnel",
    profileNote: my
      ? "မှတ်ချက် - ဤဝန်ထမ်းပရိုဖိုင်များသည် ဝန်ဆောင်မှုအမျိုးအစားကို နမူနာပြသထားခြင်းသာ ဖြစ်ပါသည်။ အတည်ပြုပြီးသော ဝန်ထမ်းတစ်ဦးချင်းစီ၏ မှတ်တမ်းများ မဟုတ်ပါ။ ခန့်အပ်ခြင်းနှင့် စိစစ်အတည်ပြုခြင်း ပြီးစီးပါက အမှန်တကယ် ဝန်ထမ်းပရိုဖိုင်များကို ဖော်ပြပေးပါမည်။"
      : "Note: These are illustrative service profiles, not verified individual employee records. Actual personnel profiles will be displayed after authorized recruitment and verification.",
    options: my ? "ဝန်ထမ်းချထားမှု အစီအစဉ်များ" : "DEPLOYMENT OPTIONS",
    coverage: my ? "လိုအပ်ချက်အလိုက် လုံခြုံရေးဝန်ဆောင်မှု" : "Flexible Security Coverage",
    coverageDesc: my
      ? "သင့်အတွက် သင့်တော်သော ဝန်ဆောင်မှုပုံစံကို ရွေးချယ်ပါ။ နောက်ဆုံးကျသင့်ငွေသည် ဝန်ထမ်းအရေအတွက်၊ နေရာဒေသနှင့် လုပ်ငန်းအခြေအနေများအပေါ် မူတည်ပါသည်။"
      : "Select a coverage model. Final pricing depends on personnel requirements, location and operational conditions.",
    popular: my ? "လူကြိုက်များသော အစီအစဉ်" : "POPULAR OPTION",
    selectPlan: my ? "ဤအစီအစဉ်ကို ရွေးချယ်ရန်" : "Select This Plan",
    booking: my ? "လုံခြုံရေးဝန်ဆောင်မှု တောင်းဆိုရန်" : "SECURITY SERVICE REQUEST",
    hireYour: my ? "သင့်အတွက်" : "Hire Your",
    securityTeam: my ? "လုံခြုံရေးအဖွဲ့။" : "Security Team.",
    bookingDesc: my
      ? "သင့်အဆောက်အအုံနှင့် လုံခြုံရေးလိုအပ်ချက်များကို ပြောပြပေးပါ။ ကျွန်ုပ်တို့၏ လုပ်ငန်းဆောင်ရွက်ရေးအဖွဲ့မှ စိစစ်ပြီး သင့်တော်သော ဝန်ဆောင်မှုအစီအစဉ်ကို ပြင်ဆင်ပေးနိုင်ပါသည်။"
      : "Tell us about your property and security requirements. Our operations team can review your request and prepare a suitable deployment proposal.",
    assessment: my ? "လိုအပ်ချက် စိစစ်ခြင်း" : "Requirement Assessment",
    assessmentDesc: my ? "သင့်အဆောက်အအုံနှင့် လုံခြုံရေးလိုအပ်ချက်များကို နားလည်စိစစ်ခြင်း။" : "Understand your property and security needs.",
    planning: my ? "ဝန်ထမ်း စီစဉ်ခြင်း" : "Personnel Planning",
    planningDesc: my ? "သင့်တော်သော ဝန်ထမ်းများနှင့် တာဝန်ချိန်များ သတ်မှတ်ခြင်း။" : "Determine suitable personnel and shift coverage.",
    quotation: my ? "စိတ်ကြိုက် ဈေးနှုန်းတင်ပြခြင်း" : "Custom Quotation",
    quotationDesc: my ? "သင့်လိုအပ်ချက်အပေါ် မူတည်၍ ဝန်ဆောင်မှုအဆိုပြုလွှာ ပြင်ဆင်ခြင်း။" : "Prepare a proposal based on your requirements.",
    bookingLabel: my ? "တောင်းဆိုမှုနှင့် ဈေးနှုန်းတင်ပြခြင်း" : "BOOKING & QUOTATION",
    requirements: my ? "လုံခြုံရေး လိုအပ်ချက်များ" : "Security Requirements",
    completeInfo: my ? "အောက်ပါအချက်အလက်များကို ဖြည့်စွက်ပေးပါ။" : "Complete the information below.",
    previewReady: my ? "တောင်းဆိုမှု အကြိုကြည့်ရှုရန် အသင့်ဖြစ်ပါပြီ" : "Request Preview Ready",
    previewDesc: my
      ? "သင့်အချက်အလက်များကို ဤဘရောက်ဇာအတွင်း စစ်ဆေးပြီးပါပြီ။ ဤ Frontend Demo သည် Backend နှင့် မချိတ်ဆက်ရသေးသဖြင့် ကုမ္ပဏီထံသို့ တောင်းဆိုမှု မပေးပို့ရသေးပါ။"
      : "Your information has been validated in this browser. This frontend demo is not yet connected to a backend, so the request has not been sent to the company.",
    edit: my ? "ပြန်လည်ပြင်ဆင်ရန်" : "Edit Request",
    name: my ? "အမည်အပြည့်အစုံ" : "Full Name",
    company: my ? "ကုမ္ပဏီ / အဖွဲ့အစည်း" : "Company / Organization",
    phone: my ? "ဖုန်းနံပါတ်" : "Phone Number",
    email: my ? "အီးမေးလ်လိပ်စာ" : "Email Address",
    location: my ? "ဝန်ဆောင်မှုပေးမည့်နေရာ" : "Deployment Location",
    service: my ? "လုံခြုံရေးဝန်ဆောင်မှု" : "Security Service",
    guards: my ? "လုံခြုံရေးဝန်ထမ်း အရေအတွက်" : "Number of Guards",
    shift: my ? "တာဝန်ချိန် အမျိုးအစား" : "Shift Type",
    duration: my ? "ငှားရမ်းမည့် ကာလ" : "Hiring Duration",
    startDate: my ? "စတင်မည့်ရက်" : "Expected Start Date",
    details: my ? "အခြားလိုအပ်ချက်များ" : "Additional Requirements",
    submit: my ? "တောင်းဆိုမှုကို စစ်ဆေးရန်" : "Review Security Request",
    disclaimer: my
      ? "ဤဖောင်ကို တင်သွင်းခြင်းသည် ကြိုတင်စာရင်းသွင်းမှု အတည်ပြုခြင်း သို့မဟုတ် ဝန်ဆောင်မှုစာချုပ် ချုပ်ဆိုခြင်း မဟုတ်ပါ။"
      : "Submitting this form for review does not constitute a confirmed booking or service contract.",
    career: my ? "အလုပ်အကိုင် အခွင့်အလမ်းများ" : "CAREER OPPORTUNITIES",
    careerTitle: my ? "ကျွန်ုပ်တို့၏ လုံခြုံရေးအဖွဲ့တွင် ပါဝင်လိုပါသလား။" : "Interested in Joining Our Security Team?",
    careerDesc: my ? "လုံခြုံရေးဝန်ထမ်း ခန့်အပ်ရေး အခွင့်အလမ်းများကို လေ့လာလိုက်ပါ။" : "Explore potential security personnel recruitment opportunities.",
    apply: my ? "အလုပ်လျှောက်ထားရန်" : "Apply for a Position",
    footerDesc: my
      ? "လူအင်အားဝန်ဆောင်မှုနှင့် ဉာဏ်ရည်မြင့် စောင့်ကြည့်ရေးနည်းပညာများကို ပေါင်းစပ်ပေးထားပါသည်။ ApexiveAI မှ စွမ်းအားပေးထားပါသည်။"
      : "Integrated manpower and intelligent surveillance solutions. Powered by ApexiveAI.",
    securityServices: my ? "လုံခြုံရေးဝန်ဆောင်မှုများ" : "Security Services",
    exploreFooter: my ? "ဆက်လက်လေ့လာရန်" : "Explore",
    cctvSolutions: my ? "CCTV ဖြေရှင်းချက်များ" : "CCTV Solutions",
    ourServices: my ? "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ" : "Our Services",
    protectionPackages: my ? "လုံခြုံရေးအစီအစဉ်များ" : "Protection Packages",
    contact: my ? "ဆက်သွယ်ရန်" : "Contact Us",
    sentName: my ? "အမည်" : "Name",
    sentService: my ? "ဝန်ဆောင်မှု" : "Service",
    sentGuards: my ? "ဝန်ထမ်းအရေအတွက်" : "Guards",
    sentShift: my ? "တာဝန်ချိန်" : "Shift",
    sentLocation: my ? "နေရာ" : "Location",
    guardsSuffix: my ? " ဦး" : " Guards",
  };

  const categoryTranslations = [
    {
      title: my ? "ရုံးလုပ်ငန်း လုံခြုံရေး" : "Corporate Security",
      desc: my
        ? "ရုံးခန်းများ၊ စီးပွားရေးအဆောက်အအုံများနှင့် ကုမ္ပဏီလုပ်ငန်းခွင်များအတွက် ကျွမ်းကျင်သော လုံခြုံရေးဝန်ဆောင်မှု။"
        : categories[0].desc,
      tags: my
        ? ["ရုံးအဆောက်အအုံများ", "ဧည့်ကြိုလုံခြုံရေး", "ဝင်ထွက်ခွင့် ထိန်းချုပ်မှု"]
        : categories[0].tags,
    },
    {
      title: my ? "စက်မှုလုပ်ငန်း လုံခြုံရေး" : "Industrial Security",
      desc: my
        ? "စက်ရုံများ၊ ကုန်လှောင်ရုံများ၊ ဆောက်လုပ်ရေးလုပ်ငန်းခွင်များနှင့် စက်မှုဇုန်များအတွက် လုံခြုံရေးဝန်ထမ်းများ။"
        : categories[1].desc,
      tags: my
        ? ["စက်ရုံများ", "ကုန်လှောင်ရုံများ", "ဆောက်လုပ်ရေးလုပ်ငန်းခွင်"]
        : categories[1].tags,
    },
    {
      title: my ? "အခမ်းအနားနှင့် VIP လုံခြုံရေး" : "Event & VIP Security",
      desc: my
        ? "ပုဂ္ဂလိကအခမ်းအနားများ၊ ကုမ္ပဏီပွဲများနှင့် အထူးတာဝန်များအတွက် သီးသန့်လုံခြုံရေးဝန်ထမ်းများ။"
        : categories[2].desc,
      tags: my
        ? ["အခမ်းအနားများ", "VIP ကာကွယ်ရေး", "လူအုပ်ထိန်းချုပ်မှု"]
        : categories[2].tags,
    },
    {
      title: my ? "လူနေအိမ်ရာ လုံခြုံရေး" : "Residential Security",
      desc: my
        ? "လူနေအိမ်များ၊ တိုက်ခန်းများနှင့် လုံခြုံရေးစနစ်ရှိသော လူနေအိမ်ရာများအတွက် လုံခြုံရေးဝန်ဆောင်မှု။"
        : categories[3].desc,
      tags: my
        ? ["လူနေအိမ်ရာ", "ကွန်ဒိုများ", "အိမ်ခြံမြေ ကာကွယ်ရေး"]
        : categories[3].tags,
    },
  ];

  const capabilityList = my
    ? [
        "ဝင်ထွက်ခွင့် ထိန်းချုပ်ခြင်းနှင့် ဧည့်သည်စီမံခန့်ခွဲခြင်း",
        "ပတ်ဝန်းကျင်နှင့် အဆောက်အအုံ လှည့်လည်စစ်ဆေးခြင်း",
        "ဖြစ်စဉ်အစီရင်ခံခြင်းနှင့် အဆင့်ဆင့်တင်ပြခြင်း",
        "အရေးပေါ်တုံ့ပြန်မှု ညှိနှိုင်းဆောင်ရွက်ခြင်း",
        "တာဝန်ချိန်အလိုက် လုံခြုံရေးလုပ်ငန်းများ",
        "နေ့စဉ်တာဝန်ဆောင်ရွက်မှု အစီရင်ခံခြင်း",
      ]
    : [
        "Access control and visitor management",
        "Perimeter and property patrol",
        "Incident reporting and escalation",
        "Emergency response coordination",
        "Shift-based security operations",
        "Daily duty reporting",
      ];

  const profileTitles = my
    ? ["ရုံးလုပ်ငန်း လုံခြုံရေးအရာရှိ", "စက်မှုလုပ်ငန်း လုံခြုံရေးအရာရှိ", "အခမ်းအနား လုံခြုံရေးဝန်ထမ်း"]
    : profiles.map((p) => p.title);

  const profileTypes = my
    ? ["ရုံးလုပ်ငန်း", "စက်မှုလုပ်ငန်း", "အခမ်းအနား"]
    : ["Corporate", "Industrial", "Event"];

  const profileExperience = my
    ? [t.experience, t.industrialAssignment, t.eventAssignment]
    : profiles.map((p) => p.experience);

  const profileSkills = my
    ? [
        ["ဝင်ထွက်ခွင့် ထိန်းချုပ်မှု", "ဧည့်သည်စီမံခန့်ခွဲမှု", "ကင်းလှည့်ခြင်း"],
        ["ပတ်ဝန်းကျင် ကင်းလှည့်ခြင်း", "လုပ်ငန်းခွင် လုံခြုံရေး", "အစီရင်ခံခြင်း"],
        ["လူအုပ်ထိန်းချုပ်မှု", "ဧည့်သည်လုံခြုံရေး", "ညှိနှိုင်းဆောင်ရွက်မှု"],
      ]
    : profiles.map((p) => p.skills);

  const packageTranslations = [
    {
      subtitle: my ? "နေ့ခင်းပိုင်း လုံခြုံရေးဝန်ဆောင်မှု" : packages[0].subtitle,
      description: my
        ? "နေ့ခင်းပိုင်း လုံခြုံရေးလုပ်ငန်းများ လိုအပ်သော စီးပွားရေးလုပ်ငန်းများအတွက်။"
        : packages[0].description,
      features: my
        ? ["သီးသန့်လုံခြုံရေးဝန်ထမ်း ချထားပေးခြင်း", "ဝင်ထွက်မှု စောင့်ကြည့်ခြင်း", "ဧည့်သည်စာရင်း မှတ်တမ်းတင်ခြင်း", "နေ့စဉ်လုပ်ငန်းအစီရင်ခံခြင်း"]
        : packages[0].features,
    },
    {
      subtitle: my ? "ညပိုင်း လုံခြုံရေးဝန်ဆောင်မှု" : packages[1].subtitle,
      description: my
        ? "ညအချိန်တွင် အဆောက်အအုံနှင့် ပိုင်ဆိုင်မှုများကို ကာကွယ်ရန် လိုအပ်သော လုပ်ငန်းများအတွက်။"
        : packages[1].description,
      features: my
        ? ["ညပိုင်းတာဝန် ဝန်ထမ်းချထားခြင်း", "အချိန်ဇယားအလိုက် ကင်းလှည့်ခြင်း", "ပတ်ဝန်းကျင် စောင့်ကြည့်ခြင်း", "ဖြစ်စဉ်များကို အဆင့်ဆင့်တင်ပြခြင်း"]
        : packages[1].features,
    },
    {
      subtitle: my ? "အချိန်ပြည့် လုံခြုံရေးဝန်ဆောင်မှု" : packages[2].subtitle,
      description: my
        ? "စီစဉ်ထားသော တာဝန်ချိန်များဖြင့် အချိန်ပြည့် လုံခြုံရေးဝန်ဆောင်မှုပေးခြင်း။"
        : packages[2].description,
      features: my
        ? ["တာဝန်ချိန် အလှည့်ကျစီစဉ်ခြင်း", "အဆက်မပြတ် ဝန်ထမ်းချထားခြင်း", "တာဝန်လွှဲပြောင်းမှု လုပ်ထုံးလုပ်နည်းများ", "လုပ်ငန်းဆောင်ရွက်မှု ညှိနှိုင်းခြင်း"]
        : packages[2].features,
    },
  ];

  const serviceOptions = [
    { value: "Corporate Security", label: my ? "ရုံးလုပ်ငန်း လုံခြုံရေး" : "Corporate Security" },
    { value: "Industrial Security", label: my ? "စက်မှုလုပ်ငန်း လုံခြုံရေး" : "Industrial Security" },
    { value: "Event & VIP Security", label: my ? "အခမ်းအနားနှင့် VIP လုံခြုံရေး" : "Event & VIP Security" },
    { value: "Residential Security", label: my ? "လူနေအိမ်ရာ လုံခြုံရေး" : "Residential Security" },
  ];

  const shiftOptions = [
    { value: "Day Shift", label: my ? "နေ့ပိုင်းတာဝန်" : "Day Shift" },
    { value: "Night Shift", label: my ? "ညပိုင်းတာဝန်" : "Night Shift" },
    { value: "24/7 Protection", label: my ? "၂၄ နာရီ / ၇ ရက်" : "24/7 Protection" },
    { value: "Flexible Shifts", label: my ? "ပြောင်းလွယ်ပြင်လွယ် တာဝန်ချိန်" : "Flexible Shifts" },
  ];

  const durationOptions = [
    { value: "Daily", label: my ? "နေ့စဉ်" : "Daily" },
    { value: "Weekly", label: my ? "အပတ်စဉ်" : "Weekly" },
    { value: "Monthly", label: my ? "လစဉ်" : "Monthly" },
    { value: "Yearly", label: my ? "နှစ်စဉ်" : "Yearly" },
    { value: "Event Based", label: my ? "အခမ်းအနားအလိုက်" : "Event Based" },
    { value: "Custom", label: my ? "စိတ်ကြိုက်" : "Custom" },
  ];

  const filterOptions = [
    { value: "All", label: t.all },
    { value: "Corporate", label: t.corporate },
    { value: "Industrial", label: t.industrial },
    { value: "Event", label: t.event },
  ];

  const filteredProfiles =
    activeCategory === "All"
      ? profiles
      : profiles.filter((profile) => profile.type === activeCategory);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#080e18] text-white">
      {/* TOP INFORMATION BAR */}
      <div className="hidden border-b border-white/10 bg-[#060b13] md:block">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-3 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-cyan-400" />
            {t.top}
          </span>
          <span>{t.operations}</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080e18]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck size={27} className="text-cyan-400" />
            </div>
            <div>
              <div className="text-lg font-black">
                SECURE<span className="text-cyan-400">GUARD</span>
              </div>
              <div className="text-[9px] tracking-[0.25em] text-slate-500">
                BY APEXIVEAI
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <Link href="/">{t.nav.home}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/security-guards" className="text-cyan-400">
              {t.nav.guards}
            </Link>
            <Link href="/cctv-shop">{t.nav.cctv}</Link>
            <Link href="/services">{t.nav.services}</Link>
            <Link href="/packages">{t.nav.packages}</Link>
            <LanguageSwitcher />
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#booking"
              className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950"
            >
              {t.nav.hire}
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 lg:hidden">
            {[
              [t.nav.home, "/"],
              [t.nav.about, "/about"],
              [t.nav.guards, "/security-guards"],
              [t.nav.cctv, "/cctv-shop"],
              [t.nav.services, "/services"],
              [t.nav.packages, "/packages"],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300"
              >
                {name}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold text-cyan-400"
            >
              {t.nav.hire}
            </Link>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=90"
            alt="Professional security operations"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e18] via-[#080e18]/95 to-[#080e18]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-300">
              <ShieldCheck size={15} />
              {t.heroBadge}
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {t.professional}
              <br />
              <span className="text-cyan-400">{t.personnel}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
              {t.heroDesc}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#booking"
                className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                {t.hirePersonnel}
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#services"
                className="flex items-center gap-3 rounded-lg border border-white/20 px-7 py-4 font-bold hover:border-cyan-400 hover:text-cyan-400"
              >
                {t.explore}
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-8">
              <div>
                <ShieldCheck className="mb-3 text-cyan-400" size={24} />
                <p className="text-sm font-bold">{t.professionalLabel}</p>
                <p className="mt-1 text-[10px] text-slate-500">{t.standards}</p>
              </div>
              <div>
                <Clock3 className="mb-3 text-cyan-400" size={24} />
                <p className="text-sm font-bold">{t.flexible}</p>
                <p className="mt-1 text-[10px] text-slate-500">{t.scheduling}</p>
              </div>
              <div>
                <Siren className="mb-3 text-cyan-400" size={24} />
                <p className="text-sm font-bold">{t.coordinated}</p>
                <p className="mt-1 text-[10px] text-slate-500">{t.incident}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
            {t.deployment}
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            {t.environment}
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            {t.environmentDesc}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const translated = categoryTranslations[index];

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-[#0d1623] p-7 transition hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon size={28} className="text-cyan-400" />
                </div>

                <p className="mt-7 text-xs tracking-widest text-slate-600">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-lg font-bold">{translated.title}</h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
                  {translated.desc}
                </p>

                <div className="mt-5 space-y-3">
                  {translated.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={14} className="text-cyan-400" />
                      {tag}
                    </div>
                  ))}
                </div>

                <Link
                  href="#booking"
                  onClick={() => updateField("service", item.title)}
                  className="mt-7 flex items-center gap-2 text-xs font-bold text-cyan-400"
                >
                  {t.requestService} <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85"
              alt="Security team coordination"
              className="h-[420px] w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-[#080e18]/85 p-5 backdrop-blur-xl">
              <p className="text-xs font-bold tracking-widest text-cyan-400">
                {my ? "လုံခြုံရေးလုပ်ငန်းဆောင်ရွက်မှု" : "SECURITY OPERATIONS"}
              </p>
              <p className="mt-2 text-xl font-black">
                {my ? "လူအင်အား။ လုပ်ငန်းစဉ်။ ကာကွယ်မှု။" : "People. Process. Protection."}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              {t.capabilities}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              {t.moreThan}
              <br />
              <span className="text-cyan-400">{t.deploymentText}</span>
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-400">
              {t.capabilityDesc}
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {capabilityList.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-cyan-400" />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/get-a-quote"
              className="mt-10 inline-flex items-center gap-3 rounded-lg border border-cyan-400/40 px-6 py-4 text-sm font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              {t.discuss} <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PERSONNEL PROFILES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              {t.personnelSection}
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              {t.profilesTitle}
            </h2>
            <p className="mt-4 text-sm text-slate-400">{t.profilesDesc}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-lg border px-4 py-2 text-xs font-bold transition ${
                  activeCategory === category.value
                    ? "border-cyan-400 bg-cyan-400 text-slate-950"
                    : "border-white/10 text-slate-400 hover:border-cyan-400"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {filteredProfiles.map((profile) => {
            const index = profiles.findIndex((p) => p.id === profile.id);

            return (
              <div
                key={profile.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1623]"
              >
                <div className="relative h-64">
                  <img
                    src={profile.image}
                    alt={profileTitles[index]}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-[#080e18]/90 px-3 py-2 text-[10px] font-bold tracking-widest text-cyan-400">
                    {profile.id}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold tracking-widest text-cyan-400">
                      {profileTypes[index].toUpperCase()}
                    </span>
                    <BadgeCheck size={19} className="text-cyan-400" />
                  </div>

                  <h3 className="mt-3 text-lg font-bold">{profileTitles[index]}</h3>
                  <p className="mt-2 text-xs text-slate-500">
                    {profileExperience[index]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {profileSkills[index].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#booking"
                    className="mt-7 flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 py-3 text-xs font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {t.requestPersonnel} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-500">{t.profileNote}</p>
      </section>

      {/* DEPLOYMENT PACKAGES */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              {t.options}
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              {t.coverage}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
              {t.coverageDesc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-8 ${
                  pkg.featured
                    ? "border-cyan-400/60 bg-cyan-400/[0.06]"
                    : "border-white/10 bg-[#101b29]"
                }`}
              >
                {pkg.featured && (
                  <span className="rounded-full bg-cyan-400 px-3 py-2 text-[9px] font-black tracking-widest text-slate-950">
                    {t.popular}
                  </span>
                )}

                <p className="mt-7 text-[10px] font-bold tracking-widest text-cyan-400">
                  {packageTranslations[index].subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  {my
                    ? index === 0
                      ? "နေ့ပိုင်းတာဝန်"
                      : index === 1
                        ? "ညပိုင်းတာဝန်"
                        : "၂၄ နာရီ ကာကွယ်ရေး"
                    : pkg.name}
                </h3>

                <div className="mt-5 flex items-center gap-3">
                  <Clock3 className="text-cyan-400" size={20} />
                  <span className="text-sm text-slate-300">
                    {my
                      ? index === 2
                        ? "၂၄ နာရီ"
                        : "၈–၁၂ နာရီ"
                      : pkg.duration}
                  </span>
                </div>

                <p className="mt-5 min-h-12 text-sm leading-7 text-slate-400">
                  {packageTranslations[index].description}
                </p>

                <div className="my-7 border-t border-white/10" />

                <ul className="space-y-5">
                  {packageTranslations[index].features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={17} className="shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#booking"
                  onClick={() => updateField("shift", pkg.name)}
                  className="mt-9 flex items-center justify-center gap-2 rounded-lg bg-cyan-400 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  {t.selectPlan} <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              {t.booking}
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              {t.hireYour}
              <br />
              <span className="text-cyan-400">{t.securityTeam}</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-400">
              {t.bookingDesc}
            </p>

            <div className="mt-10 space-y-7">
              {[
                {
                  icon: ClipboardCheck,
                  title: t.assessment,
                  desc: t.assessmentDesc,
                },
                {
                  icon: UserCheck,
                  title: t.planning,
                  desc: t.planningDesc,
                },
                {
                  icon: Award,
                  title: t.quotation,
                  desc: t.quotationDesc,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                      <Icon size={23} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1623] p-6 md:p-10">
            <div className="mb-9 flex items-center justify-between border-b border-white/10 pb-7">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-cyan-400">
                  {t.bookingLabel}
                </p>
                <h3 className="mt-3 text-2xl font-black">{t.requirements}</h3>
                <p className="mt-2 text-xs text-slate-500">{t.completeInfo}</p>
              </div>
              <ShieldCheck size={34} className="text-cyan-400" />
            </div>

            {submitted ? (
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-8">
                <CheckCircle2 size={42} className="text-cyan-400" />
                <h4 className="mt-5 text-xl font-bold">{t.previewReady}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {t.previewDesc}
                </p>

                <div className="mt-6 space-y-3 rounded-lg bg-black/20 p-5 text-sm">
                  <p><span className="text-slate-500">{t.sentName}:</span> {form.name}</p>
                  <p><span className="text-slate-500">{t.sentService}:</span> {serviceOptions.find((o) => o.value === form.service)?.label ?? form.service}</p>
                  <p><span className="text-slate-500">{t.sentGuards}:</span> {form.guards}</p>
                  <p><span className="text-slate-500">{t.sentShift}:</span> {shiftOptions.find((o) => o.value === form.shift)?.label ?? form.shift}</p>
                  <p><span className="text-slate-500">{t.sentLocation}:</span> {form.location}</p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-lg border border-cyan-400/30 px-6 py-3 text-sm font-bold text-cyan-400"
                >
                  {t.edit}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.name} *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder={my ? "သင့်အမည်ကို ရိုက်ထည့်ပါ" : "Enter your full name"}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none transition focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.company}
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder={my ? "ကုမ္ပဏီအမည်" : "Company name"}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.phone} *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+95 ..."
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold text-slate-300">
                    {t.location} *
                  </label>
                  <input
                    required
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder={
                      my
                        ? "မြို့နယ်၊ မြို့၊ လုပ်ငန်းခွင်လိပ်စာ"
                        : "Township, City, Site Address"
                    }
                    className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.service} *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {serviceOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.guards} *
                    </label>
                    <select
                      required
                      value={form.guards}
                      onChange={(e) => updateField("guards", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {["1", "2", "3", "5", "10", "15", "20", "30", "50", "100+"].map((item) => (
                        <option key={item} value={item}>
                          {item}{t.guardsSuffix}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.shift} *
                    </label>
                    <select
                      required
                      value={form.shift}
                      onChange={(e) => updateField("shift", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {shiftOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      {t.duration} *
                    </label>
                    <select
                      required
                      value={form.duration}
                      onChange={(e) => updateField("duration", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {durationOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold text-slate-300">
                    {t.startDate}
                  </label>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(e) => updateField("startDate", e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold text-slate-300">
                    {t.details}
                  </label>
                  <textarea
                    rows={5}
                    value={form.details}
                    onChange={(e) => updateField("details", e.target.value)}
                    placeholder={
                      my
                        ? "သင့်အဆောက်အအုံ၊ လုပ်ငန်းလိုအပ်ချက်များနှင့် အခြားလိုအပ်ချက်များကို ရေးသားပါ..."
                        : "Describe your property, operational requirements, preferred arrangements..."
                    }
                    className="w-full resize-y rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-cyan-400 py-5 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  {t.submit}
                  <ArrowRight size={19} />
                </button>

                <p className="text-center text-[10px] leading-6 text-slate-500">
                  {t.disclaimer}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* RECRUITMENT CTA */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              {t.career}
            </p>
            <h2 className="mt-4 text-2xl font-black md:text-3xl">
              {t.careerTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-400">{t.careerDesc}</p>
          </div>
          <Link
            href="/careers/security-guard"
            className="flex shrink-0 items-center gap-3 rounded-lg border border-cyan-400/40 px-7 py-4 text-sm font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            {t.apply} <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060b13]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={30} className="text-cyan-400" />
              <span className="text-xl font-black">
                SECURE<span className="text-cyan-400">GUARD</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              {t.footerDesc}
            </p>
          </div>

          <div>
            <h4 className="font-bold">{t.securityServices}</h4>
            <div className="mt-5 space-y-4 text-sm text-slate-400">
              {categoryTranslations.map((item) => (
                <p key={item.title}>{item.title}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold">{t.exploreFooter}</h4>
            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p><Link href="/cctv-shop">{t.cctvSolutions}</Link></p>
              <p><Link href="/services">{t.ourServices}</Link></p>
              <p><Link href="/packages">{t.protectionPackages}</Link></p>
              <p><Link href="/contact">{t.contact}</Link></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-600">
          © ApexiveAI SecureGuard. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
