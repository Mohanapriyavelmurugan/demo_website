/*
 * Single source of truth for redesign copy (founder plan, 13 Oct 2026).
 * UI components should import from here — do not hardcode marketing copy in pages.
 */

export const company = {
  name: "Valtraq",
  legalName: "VALTRAQ HEALTH CARE PRIVATE LIMITED",
  shortLegalName: "Valtraq Health Care",
  product: "Clinoveai",
  tagline: "Where clinical judgment meets explainable AI",
  heroHeadline: "Every value, traced into better care.",
  heroSubhead:
    "Where clinical judgment meets explainable AI. Valtraq builds decision support and intelligent records for India's clinics, so a doctor sees the whole patient, not just today's visit.",
  country: "India",
  incorporated: "13 Oct 2026",
  clinoveaiUrl: "https://clinoveai.com",
  linkedIn: "", // add when public URL is ready
};

export const contact = {
  email: "contact@valtraq.in",
  phone: "+91 81259 54423",
};

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Clinoveai", href: "/clinoveai" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
] as const;

export const primaryCta = { label: "Request a demo", href: "/contact?type=demo" };

export const home = {
  proofLine: "Built with practising diabetologists in India.",
  storyTeaser: {
    title: "Every value matters",
    body:
      "Every reading, every prescription, every meal and every walk is a value in someone's health history. Most of them get lost between visits. Valtraq exists to keep those values, and to trace them.",
    linkLabel: "Read the Valtraq story",
    href: "/about",
  },
  whatWeBuild: [
    {
      title: "Clinoveai",
      body: "Explainable clinical AI: decision support that shows the doctor its reasons.",
      href: "/clinoveai",
    },
    {
      title: "Intelligent EMR",
      body: "Records a small clinic can afford, built around Indian outpatient care.",
      href: "/solutions#emr",
      status: "Available" as const,
    },
    {
      title: "Hospital management",
      body: "From the clinic to the hospital, in one connected record.",
      href: "/solutions#hmr",
      status: "In development" as const,
    },
    {
      title: "Healthcare analytics",
      body: "A clear view of care across doctors, clinics and time.",
      href: "/solutions#analytics",
      status: "In development" as const,
    },
  ],
  whyValtraq: [
    {
      title: "Explainable by design",
      body: "Every suggestion shows why, so the doctor can check it before using it.",
    },
    {
      title: "Doctors build it with us",
      body: "Practising clinicians shape every feature.",
    },
    {
      title: "Built for Indian clinics",
      body: "Short consultations, mixed paper and digital records, many languages.",
    },
    {
      title: "Privacy by design",
      body: "Patient data is used only with consent, and only for care.",
    },
  ],
  responsibility: [
    {
      title: "The doctor decides",
      body: "Valtraq suggests; the doctor approves, edits or rejects.",
    },
    {
      title: "Every suggestion shows its reason",
      body: "No black boxes in the consultation room.",
    },
    {
      title: "Patient data protected",
      body: "Consent first, identities removed before any AI step.",
    },
  ],
  /** Hidden until real doctor quotes arrive via Dr Aswin. */
  showTestimonials: false,
  testimonials: [] as { quote: string; name: string; role: string; city: string }[],
  closing: {
    title: "Bring explainable AI into your clinic.",
    primary: { label: "Request a demo", href: "/contact?type=demo" },
    secondary: { label: "Partner with us", href: "/contact?type=partnership" },
    investorLine: "Investing in healthcare AI built for India?",
    investorHref: "/contact?type=investor",
  },
};

export const solutions = {
  intro:
    "Intelligence as a service for healthcare. Valtraq brings clinical intelligence to the consultation as a managed service, so clinics get the benefit without building anything themselves.",
  blocks: [
    {
      id: "clinoveai",
      title: "Explainable clinical AI",
      body:
        "Decision support that sits with the doctor during outpatient care. Every suggestion comes with its reasons, and the doctor stays in charge of every decision.",
      status: "Available for pilots" as const,
      linkLabel: "Meet Clinoveai",
      href: "/clinoveai",
    },
    {
      id: "emr",
      title: "Intelligent EMR",
      body:
        "Electronic medical records a small clinic can afford, shaped around how Indian outpatient care runs. Visit notes, prescriptions, labs and history in one place.",
      status: "Available" as const,
      linkLabel: "Request a demo",
      href: "/contact?type=demo",
    },
    {
      id: "hmr",
      title: "Hospital management (HMR)",
      body:
        "From clinic records to hospital information and management, in one connected record.",
      status: "In development" as const,
      linkLabel: "Tell us what you need",
      href: "/contact?type=other",
    },
    {
      id: "analytics",
      title: "Healthcare analytics",
      body:
        "A clear view of care across doctors, clinics and time, so clinic owners can see patterns and plan.",
      status: "In development" as const,
      linkLabel: "Talk to us",
      href: "/contact?type=other",
    },
    {
      id: "rnd",
      title: "Research and development",
      body:
        "Ongoing work by clinicians and scientists on explainable AI for healthcare, including joint studies with partners.",
      status: "Ongoing" as const,
      linkLabel: "Partner with us",
      href: "/contact?type=partnership",
    },
  ],
  whoWeServe: [
    {
      label: "Clinics and diabetologists",
      blurb: "Outpatient teams who need clarity in short consultations.",
      icon: "clinic" as const,
      later: false,
    },
    {
      label: "Hospital outpatient departments",
      blurb: "Busy OPDs that want consistent, explainable support.",
      icon: "hospital" as const,
      later: false,
    },
    {
      label: "Research institutions",
      blurb: "Joint studies with ethical oversight and shared authorship.",
      icon: "research" as const,
      later: false,
    },
    {
      label: "Health-tech and pharma partners",
      blurb: "Integrations that respect clinical safety — later.",
      icon: "partner" as const,
      later: true,
    },
  ],
};

export const clinoveai = {
  hero: {
    title: "Clinoveai",
    headline: "A second look at every patient, in the minutes you have.",
    subhead:
      "Explainable decision support for outpatient diabetes care. You see the suggestion and the reason behind it, and you decide.",
  },
  film: {
    caption: "Clinoveai in the consultation",
    note: "Film uses synthetic patients only. Product film drops in when ready.",
  },
  moments: [
    {
      title: "Before the patient sits down",
      body: "History, labs and last visit, already in one view.",
    },
    {
      title: "During the consultation",
      body: "Suggestions with their reasons, and known drug interaction and dose cautions flagged before you print.",
    },
    {
      title: "As the patient leaves",
      body: "A prescription plus a diet and exercise plan they can understand.",
    },
  ],
  explainable:
    "Clinoveai combines clinical rules written with diabetologists and AI that drafts suggestions. Each suggestion shows which readings and guidelines it rests on. If it can't explain a suggestion, it doesn't make one.",
  worksWith: [
    {
      title: "Already have an EMR?",
      body: "Clinoveai gives decision support and prints a prescription you can upload back.",
    },
    {
      title: "No EMR yet?",
      body: "Use Clinoveai's records too.",
    },
  ],
  faq: [
    { q: "Does it replace the doctor?", a: "No. The doctor always decides." },
    {
      q: "Who sees patient data?",
      a: "Only your clinic team for care, under your consent practices.",
    },
    {
      q: "Do patients need to consent?",
      a: "Yes — consent first before patient data is used for care workflows.",
    },
    {
      q: "How long does setup take?",
      a: "We start with a focused pilot shaped around your clinic's workflow.",
    },
    { q: "What does the pilot cost?", a: "Ask for a quote." },
    {
      q: "Which languages?",
      a: "Built for Indian outpatient care; language support is discussed during onboarding.",
    },
  ],
  closing: {
    title: "See Clinoveai in your own clinic.",
    cta: { label: "Request a demo", href: "/contact?type=demo" },
  },
};

export const about = {
  storyTitle: "Every value matters.",
  story: [
    "Every reading, every prescription, every meal and every walk is a value in someone's health history. Each one holds a clue to tomorrow's diagnosis. Most of them get lost between visits: in paper files, in memory, and in clinics too busy to look back.",
    "Valtraq exists to keep those values, and to trace them. Val is the value in your history. Traq is how we follow it over time, so a doctor sees the whole person, not just today's visit. We spell it with a q because we set out to do this differently.",
  ],
  originTitle: "Where we come from.",
  origin: [
    "Valtraq began with a founder raised around medicine, in a family rooted in pharma and healthcare, who crossed into technology to see what it could do for care. The turning point came while building clinical AI alongside a practising diabetologist. There we saw the real problem up close: brilliant doctors with only minutes per patient, and patients leaving with a prescription but no real understanding of their condition.",
    "Valtraq grew into a team of friends, doctors and scientists, each bringing a different discipline to one purpose.",
  ],
  buildTitle: "What we build.",
  build: [
    "Decision support that helps a busy doctor reach a better diagnosis in a short window.",
    "A complete diet and exercise plan alongside every prescription, so patients understand their condition and can act on it.",
    "An EMR that even a small clinic can afford.",
  ],
  buildFoot:
    "From there, we are growing into hospital information systems, hospital management and, in time, pharma.",
  promiseTitle: "Our promise.",
  promise:
    "The best care for every patient. For every doctor, a tool that makes them better at what they do, never one that replaces them.",
  values: [
    { title: "Evidence before claims", body: "We say only what we can stand behind." },
    { title: "Curiosity", body: "We keep asking until the clinical problem is clear." },
    { title: "Own the outcome", body: "We take responsibility for what we ship." },
    { title: "Many minds, one mission", body: "Doctors, scientists and builders work as one." },
    { title: "Dream global, start here", body: "Built for India first, designed to travel." },
  ],
  showMarkSection: true,
  mark: {
    title: "Our mark",
    note: "Hover each letter to see how Valtraq Health Care reads in the mark.",
    captions: [
      "The solid V is Valtraq: the keystone, the one piece that holds everything together.",
      "The H stands on two pillars, medicine and technology, joined by a straight, steady bridge.",
      "The C grows from the H's second pillar. Health and care share one stem, because in our work you cannot have one without the other.",
    ],
  },
  closingLine: "Valtraq Health Care: every value, traced into better care.",
  investorBand: {
    title: "Building healthcare AI India can trust.",
    body: "Partners, investors and future colleagues: talk to us.",
    primary: { label: "Talk to us", href: "/contact?type=investor" },
    secondary: { label: "See open roles", href: "/careers" },
  },
};

export const partners = {
  hero: {
    title: "We build with care, not just for it.",
    subhead:
      "The best healthcare AI is built with the people who use it. Valtraq brings together doctors, researchers and engineers to make AI that explains itself. Let's build it together.",
  },
  principles: [
    { title: "Purpose first", body: "Partnerships start from a shared clinical purpose." },
    { title: "Transparency in every step", body: "We show how we work and what we know." },
    { title: "Built for Indian care", body: "Real clinics, real constraints, real workflows." },
    { title: "Long-term, not transactional", body: "We build relationships that last past the pilot." },
  ],
  howWeWork: [
    {
      title: "Hospitals and clinics",
      body: "A focused pilot shaped around how your consultations really run.",
    },
    {
      title: "Researchers",
      body: "Joint studies, ethical oversight, and shared authorship where appropriate.",
    },
    {
      title: "Companies",
      body: "Integrations that respect clinical safety and patient privacy.",
    },
  ],
  clinicalPartner: {
    name: "Dr Aswin Mukundan",
    role: "Diabetologist, clinical partner to Valtraq",
    /** Confirm clinic name and that he wants it shown before enabling. */
    showClinic: false,
    clinic: "Advanced Diabetes Centre, Kannur, Kerala",
    /** Photo waits on written OK. */
    showPhoto: false,
    quote:
      "I've worked with Valtraq from the first version. They sit in my clinic, watch how consultations really run, and change the product when a doctor says something doesn't work. That's rare.",
  },
  showPartnerVoices: false,
  cta: {
    title: "Become a partner.",
    button: { label: "Partner with us", href: "/contact?type=partnership" },
  },
};

export const careers = {
  hero: {
    title: "Where healthcare meets intelligence, and curiosity meets purpose.",
    subhead:
      "Clinicians, scientists and technologists work side by side to build AI that healthcare can trust.",
  },
  howWeWork: [
    {
      title: "Small teams, big ownership",
      body: "You own meaningful work from day one, with a team that has your back.",
    },
    {
      title: "Close to care",
      body: "We build for real clinics, not just the lab.",
    },
    {
      title: "Research meets execution",
      body: "We think like scientists and deliver like builders.",
    },
    {
      title: "Responsibility built in",
      body: "Ethics, privacy and quality are part of every decision.",
    },
  ],
  lookFor: [
    { title: "Curiosity", body: "You dig until the problem is clear." },
    { title: "Ownership", body: "You finish what you start." },
    { title: "Clarity", body: "You write and speak so others can act." },
    { title: "Integrity", body: "You do the right thing when it is hard." },
  ],
  lookForNote:
    "You don't need a healthcare background. You need the drive to learn and build something that matters.",
  roles: [] as { title: string; type: string; location: string }[],
  emptyRoles:
    "No open roles right now. Send us your profile and we'll keep it on file for 12 months.",
  cta: {
    title: "Ready to build what's next?",
    primary: { label: "View open roles", href: "/careers#roles" },
    secondary: { label: "Send us your profile", href: "/contact?type=careers" },
  },
};

export const contactPage = {
  intro:
    "Talk to Valtraq. Ask for a demo, a quote or a partnership, and we'll reply to the email you give us within two working days.",
  inquiryTypes: [
    { value: "demo", label: "Request a demo" },
    { value: "quote", label: "Get a quote" },
    { value: "partnership", label: "Partnership" },
    { value: "investor", label: "Investor" },
    { value: "careers", label: "Careers" },
    { value: "other", label: "Other" },
  ],
  roles: [
    "Doctor",
    "Clinic owner or admin",
    "Hospital",
    "Researcher",
    "Investor",
    "Other",
  ],
  messagePrompts: {
    demo: "Your clinic or hospital, number of doctors, and a good time to talk.",
    quote: "Which products (Clinoveai, EMR, HMR), how many doctors or sites, and the term.",
    partnership: "What kind of partnership you have in mind, and how we might work together.",
    investor: "A short note on how you'd like to connect.",
    careers: "A LinkedIn profile link and a short note on the work you want to do.",
    other: "How can we help?",
  } as Record<string, string>,
  patientWarning: "Please do not include patient details in your message.",
  consentLabel:
    "I agree that Valtraq may use these details to reply to me, as set out in the Privacy policy.",
  sidebar: {
    title: "What happens next",
    steps: [
      "We reply in two working days.",
      "A 30-minute call to understand your clinic.",
      "Then a focused pilot if it is a fit.",
    ],
    pricing: "No public price list; quotes are prepared for your clinic.",
  },
  confirmation:
    "Thank you. We've received your message and will reply to the email you gave us.",
};

export const footer = {
  companyLinks: [
    { name: "About", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  productLinks: [
    { name: "Clinoveai", href: "/clinoveai", external: false },
    { name: "Clinoveai product site", href: "https://clinoveai.com", external: true },
    { name: "EMR", href: "/solutions#emr", external: false },
    { name: "Analytics", href: "/solutions#analytics", external: false },
  ],
  legalLinks: [
    { name: "Privacy policy", href: "/legal#privacy" },
    { name: "Terms of use", href: "/legal#terms" },
    { name: "Cookie settings", href: "/legal#cookies" },
  ],
};

export const disclaimer =
  "Clinoveai is clinical decision support for use by qualified physicians. It does not provide medical advice, and all outputs require physician review.";

/** Old SPA routes → nearest new page (keep until search/bookmarks settle). */
export const redirects: Record<string, string> = {
  "/product": "/clinoveai",
  "/services": "/solutions",
  "/team": "/about",
  "/vision": "/about",
  "/validation": "/",
  "/evidence": "/",
  "/newsroom": "/",
};
