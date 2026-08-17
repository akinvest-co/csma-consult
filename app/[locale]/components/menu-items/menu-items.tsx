import logoLinkedIn from "public/images/linkedin1.png"

export const menuItems = [
  {
    id: 1,
    labelKey: "company",
    path: "/qui-sommes-nous",
  },
  {
    id: 2,
    labelKey: "infrastructures",
    path: "/infrastructure",
    subItems: [
      { id: 21, labelKey: "telecoms", path: "/infrastructure/ingenierie-reseaux" },
      { id: 22, labelKey: "energies", path: "/infrastructure/energies" },
    ],
  },
  {
    id: 3,
    labelKey: "conseil",
    path: "/conseil",
    subItems: [
      { id: 31, labelKey: "expertise_assistance", path: "/conseil/expertise-assistance-technique" },
      { id: 32, labelKey: "strategie_partenariats", path: "/conseil/strategie-partenariats-financement" },
    ],
  },
  {
    id: 4,
    labelKey: "contact",
    path: "/contact",
  },
];

export const footerMenu = [
  { id: 1, labelKey: "company_name" },
  { id: 2, labelKey: "sitemap", path: "/#" },
  { id: 3, labelKey: "privacy_policy", path: "/#" },
  { id: 4, labelKey: "legal_notice", path: "/#" },
]

export const menuItems1 = [
  { id: 1, labelKey: "company", path: "/#" },
  { id: 2, labelKey: "services", path: "/services" },
  { id: 3, labelKey: "support", path: "/#" },
  { id: 4, labelKey: "contact", path: "/#" },
]

export const menuItemsFooter = [
  { id: 1, labelKey: "company", path: "/qui-sommes-nous" },
  { id: 2, labelKey: "infrastructures", path: "/infrastructure" },
  { id: 3, labelKey: "conseil", path: "/conseil" },
]

export const socialLogo = [
  { id: 3, logo: logoLinkedIn, social: "/#" },
]