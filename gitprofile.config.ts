import { SanitizedConfig } from "./src/interfaces/sanitized-config";

const CONFIG: SanitizedConfig = {
  profile: {
    name: "R. Mishra",
    image: "/avatar.png",
    role: "",
    bio: "",
    email: "your-email@example.com",
    linkedin: "",
    github: "rmishra96",
    instagram: "",
    dribbble: "",
    website: "https://rmishra96.github.io",
    phone: "",
    country: "",
    city: "",
  },
  projects: [],
  experiences: [],
  education: [],
  certifications: [
    {
      name: "TOGAF 9 Certified",
      organization: "The Open Group",
      year: new Date().getFullYear(),
      url: "",
    },
  ],
  skills: [],
  publications: [],
  blog: {
    enabled: false,
    content: [],
  },
  github: {
    username: "rmishra96",
    sortBy: "updated",
    limit: 8,
  },
  theme: {
    default: "default",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  seo: {
    title: "R. Mishra — GitProfile",
    description: "Personal portfolio of R. Mishra",
    image: "/og-image.png",
    url: "https://rmishra96.github.io",
  },
  basePath: "/rmishra96/",
  googleAnalytics: { id: "" },
};

export default CONFIG;
