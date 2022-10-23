import catalog1 from "../assets/catalog-1.png";
import catalog2 from "../assets/catalog-2.png";
import catalog3 from "../assets/catalog-3.png";
import catalog4 from "../assets/catalog-4.png";
import subproject1 from "../assets/subproject-1.png";
import subproject2 from "../assets/subproject-2.png";
import subproject3 from "../assets/subproject-3.png";

export const heroSentence =
  "Hello! I'm Tiffany Chan, a Product Designer from Singapore who codes.";

export const navLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "projects",
    url: "/projects",
  },
];

export const catalogText = `
  I’m a curious soul from Singapore with a love for 
  <span class="highlight">visual design, design systems</span>, and 
  <span class="highlight">empowering users.</span>
`;

export const mainProjects = [
  {
    projectName: "Rescale Lab Redesign",
    description:
      "Improved conversion rates by ~30% for a startup-building SaaS",
    eyebrow: "Full Stack Engineer/Designer Internship | 2021",
    catalogImage: catalog1,
    size: "lg",
    textCol: "#19423C",
    projectPathname: "rescale-lab",
    notionPageId: "b3302eb273bd4d54babc21287c326a30",
  },
  {
    projectName: "Grab",
    description: "Internship at Grab",
    eyebrow: "Product Design Internship | 2022",
    catalogImage: catalog2,
    size: "sm",
    textCol: "#104126",
    projectPathname: "grab-internship",
    notionPageId: "d0ffd99c246b418db93a9c19b2943cf6",
  },
  {
    projectName: "larry",
    description:
      "How might we motivate users to keep up with improving their vocabulary?",
    eyebrow: "Student Project | 2021",
    catalogImage: catalog3,
    size: "sm",
    textCol: "#0A2938",
    projectPathname: "larry",
    notionPageId: "94dd7e444ca14445b7a68bff7f98a1d2",
  },
  {
    description:
      "Giving students a simple and effective way to plan their classes.",
    projectName: "NUSModPlanner",
    eyebrow: "Student Project | 2021",
    catalogImage: catalog4,
    size: "lg",
    textCol: "#5E3421",
    projectPathname: "nusmodplanner",
    notionPageId: "ea274fe0f2ed4bc9bd0a706d1efaa048",
  },
];

export const subProjects = [
  {
    projectName: "Pomopals",
    description:
      "Awarded ‘Most Beautiful Hack’ at Hack&Roll ‘22. Designed and developed a pomodoro timer for remote teams in 24 hours.",
    eyebrow: "Hackathon Winner | 2022",
    catalogImage: subproject1,
    projectPathname: "pomopals",
    notionPageId: "03beae909a9d4f898dd4f595fbf46930",
  },
  {
    description: "Empowering crypto token creators with marketing resources.",
    projectName: "shilly",
    eyebrow: "🔒 Coming Soon",
    catalogImage: subproject2,
    projectPathname: "shilly",
    notionPageId: "b3b02386b04d45058dcc28308b691515",
  },
  {
    projectName: "vibing.",
    description:
      "Hack&Roll ‘21 entry. Designed and developed a web application to generate personalized Spotify playlists for friends.",
    eyebrow: "Hackathon Entry | 2021",
    catalogImage: subproject3,
    projectPathname: "vibing",
    notionPageId: "149119a2ddef4b7aa58fd33e7695bcda",
  },
];
