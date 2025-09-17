export const menuItems = [
  { id: 1, label: "La société", path: "/qui-sommes-nous" },
  { id: 2, label: "Nos services", path: "/services",
    subItems: [
      { id: 21, label: "Etudes & ingénierie", path: "/etudes-ingenierie" },
      { id: 22, label: "Audit ", path: "/audit-infrastructures" },
      { id: 23, label: "Gestion de projets", path: "/gestion-de-projet" },
      { id: 24, label: "Centre de services", path: "/centre-de-service" },
    ],
  },
  { id: 3, label: "Support", path: "/support" },
  { id: 4, label: "Contact", path: "/contact" },
]

export const footerMenu = [
  { id: 1, label: "CSMA CONSULT" },
  { id: 2, label: " Plan du site", path: "/plan" },
  { id: 3, label: "Politique de confidentialité", path: "/politiques" },
  { id: 4, label: "Mentions légales", path: "/mentions-legales" },
]

export const menuItems1=[
  { id: 1, label: "Société", path: "/qui-sommes-nous" },
  { id: 2, label: "Nos services", path: "/services"},
  { id: 3, label: "Support", path: "/support" },
  { id: 4, label: "Contact", path: "/contact" },
]


import logoLinkedIn from "public/images/linkedin1.png"

export const socialLogo = [

  {
    id: 3,
    logo: logoLinkedIn,
    social: "/#",
  },
]

export const menuItemsFooter = [
  { id: 2, label: "Bureau d'Etudes", path: "/etudes-ingenierie",},
  { id: 1, label: "Audit d'insfrastructures", path: "/audit-infrastructures" },
  { id: 3, label: "Gestion de projet", path: "/gestion-de-projet" },
  { id: 4, label: "Centre de service ", path: "/centre-de-service" },

]