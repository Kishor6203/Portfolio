
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Core",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "React Hooks",
      "React Router",
      "Responsive UI",
      "Reusable Components",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Redux Toolkit",
      "Context API",
      "TanStack Query",
      "REST APIs",
      "Axios",
      "Fetch API",
    ],
  },
  {
    title: "UI & Styling",
    items: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Recharts",
    ],
  },
  {
    title: "Quality & Performance",
    items: [
      "Jest",
      "React Testing Library",
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
      "Debouncing",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
    ],
  },
];

export const projects = [
  {
    number: "01",
    name: "Finance & Investment Dashboard",
    type: "Fintech · Dashboard",
    description:
      "A modular financial dashboard for portfolio tracking, accounts, transactions, budgets, payments, market insights, watchlists, mutual funds and IPO workflows.",
    features: [
      "Interactive financial charts with Recharts",
      "Reusable tables, filters, forms and modals",
      "Protected routes and centralized API services",
      "Lazy loading and render optimization",
    ],
    stack: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "Recharts",
    ],
    accent: "mint",
    link: "",
    linkLabel: "Add project link",
  },
  {
    number: "02",
    name: "Hospital Management & Patient Portal",
    type: "Healthcare · Web app",
    description:
      "A feature-based React and TypeScript application for doctor discovery, appointments, patient accounts and appointment history.",
    features: [
      "Appointment booking, rescheduling and cancellation",
      "TanStack Query caching and mutations",
      "Login, registration and patient profile workflows",
      "Typed domain modules and API service layers",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
      "REST APIs",
    ],
    accent: "blue",
    link: "",
    linkLabel: "Add project link",
  },
  {
    number: "03",
    name: "Netflix Clone",
    type: "Personal project · Streaming UI",
    description:
      "A responsive streaming-platform experience with dynamic movie discovery, search and Firebase-powered authentication.",
    features: [
      "TMDB-powered movie categories and details",
      "Firebase authentication and protected routes",
      "Debounced search interactions",
      "Reusable movie cards, banners and content rows",
    ],
    stack: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Firebase",
      "TMDB API",
      "Tailwind CSS",
    ],
    accent: "red",
    link: "https://github.com/Kishor6203/Netflix-Clone",
    linkLabel: "View on GitHub",
  },
];

export const experienceHighlights = [
  "Built and maintained production React applications with TypeScript, JavaScript and Redux Toolkit.",
  "Created shared UI patterns and reusable components, reducing feature development effort by 30%.",
  "Improved frontend performance by 20–25% with lazy loading, code splitting and render optimization.",
  "Integrated 25+ REST API endpoints for CRUD operations, authentication and data-driven workflows.",
  "Debugged production issues and collaborated with Product, QA and Backend teams in biweekly Agile sprints.",
];
