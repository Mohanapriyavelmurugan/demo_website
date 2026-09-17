/*
 * Single source of truth for company facts shown across the site.
 * Change entity, product, leadership, or contact details here only.
 */

export const company = {
  name: "Valtraq",
  legalName: "Valtraq Healthcare",
  product: "Valtraq CDSS",
  tagline: "Intelligence as a service for clinical decision making.",
  summary:
    "Valtraq Healthcare delivers clinical intelligence as a service. Valtraq CDSS gives outpatient physicians guideline-grounded decision support inside the consultation, with every output under physician review.",
  country: "India",
};

/*
 * Leave a value empty to hide it everywhere it is rendered.
 * Contact details are intentionally blank until confirmed.
 */
export const contact = {
  email: "",
  phone: "",
};

export type Service = {
  title: string;
  body: string;
  icon: "stethoscope" | "book" | "chart" | "plug";
};

export const services: Service[] = [
  {
    icon: "stethoscope",
    title: "Clinical decision support as a service",
    body:
      "Valtraq CDSS delivered as a managed service: guideline-grounded considerations surfaced at the point of care, with physician review built into every output.",
  },
  {
    icon: "book",
    title: "Guideline curation and maintenance",
    body:
      "We track, harmonize, and version national and international clinical guidelines so the decision support your physicians rely on stays current.",
  },
  {
    icon: "chart",
    title: "Clinical intelligence and analytics",
    body:
      "Structured insight into care patterns, guideline adherence, and review outcomes across physicians and sites, for clinical and operational leadership.",
  },
  {
    icon: "plug",
    title: "Integration and deployment",
    body:
      "Phased integration with outpatient and digital-health workflows, with onboarding, governance setup, and ongoing support for clinical teams.",
  },
];

export type Leader = {
  name: string;
  title: string;
  bio: string;
  initials: string;
  image?: string;
  imagePosition?: string;
};

export const leadership: Leader[] = [
  {
    name: "Telukuntla Vinay Koushik",
    title: "Co-Founder & Chief Executive Officer",
    initials: "VK",
    image: "/team/vinay-koushik.png",
    imagePosition: "center 12%",
    bio: "Leads company strategy and product direction, and built the platform architecture behind Valtraq CDSS.",
  },
  {
    name: "Dr. Aswin Mukundan",
    title: "Co-Founder & Chief Medical Officer",
    initials: "AM",
    bio: "Practicing diabetologist (MBBS, MD Internal Medicine). Sets clinical standards, physician review protocols, and clinical governance.",
  },
  {
    name: "Dr. Udhendran",
    title: "Co-Founder & Chief Scientific Officer",
    initials: "U",
    bio: "Leads computational intelligence research and the scientific methods underpinning Valtraq's clinical reasoning.",
  },
  {
    name: "Ramabathina Yashaswini",
    title: "Chief Technology Officer",
    initials: "RY",
    image: "/team/yashaswini.png",
    imagePosition: "center 10%",
    bio: "Leads engineering, infrastructure, and the delivery of Valtraq CDSS as a secure, reliable service.",
  },
  {
    name: "Mohanapriya Velmurugan",
    title: "Chief Operating Officer",
    initials: "MV",
    bio: "Leads operations, client delivery, and intellectual property strategy across the company.",
  },
];

export const disclaimer =
  "Valtraq CDSS is clinical decision support for use by qualified physicians. It does not provide medical advice, and all outputs require physician review.";
