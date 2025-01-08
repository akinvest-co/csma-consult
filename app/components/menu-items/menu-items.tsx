export const menuItems = [
  {
    id: 1,
    label: "Ingénierie Télécoms",
    path: "/bureau-etudes",
  
  },

  { id: 2, label: "Nos expertises", path: "/",

    submenu: [
      { id: 1.1, label: "Bureau d'étude", path: "/bureau-etudes" },
      { id: 1.2, label: "Conseils", path: "/conseils" },
      { id: 1.3, label: "Solutions Matérielles", path: "/conseils" },
    ],
   },

   { id: 3, label: "Support", path: "/",
    submenu: [
      { id: 1.1, label: "Build & Run", path: "#" },
      { id: 1.2, label: "SAV", path: "#" },
    
    ],
   },
  { id: 5, label: "Contact", path: "/contact" },
  { id: 6, label: "Blog", path: "/blog" },

];
export const footerMenu = [
  { id: 1, label: "CSMA CONSULT" },
  { id: 2, label: " Plan du site", path: "/plan" },
  { id: 3, label: "Politique de confidentialité", path: "/politiques" },
  { id: 4, label: "Mentions légales", path: "/mentions-legales" },
]

import logoFacebook from "public/images/fb-logo.png"
import logoTwitter from "public/images/twitter-logo.png"
import logoLinkedIn from "public/images/linkedIn-logo.png"

export const socialLogo = [
  {
    id: 1,
    logo: logoFacebook,
    social: "/#",
  },
  {
    id: 2,
    logo: logoTwitter,
    social: "/#",
  },
  {
    id: 3,
    logo: logoLinkedIn,
    social: "/#",
  },
]
