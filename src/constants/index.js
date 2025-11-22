import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

// Experience Section from Resume
const experiences = [
  {
    title: "Microsoft Azure Intern",
    company_name: "itree dynamics solution",
    icon: meta, 
    iconBg: "#E6DEDD",
    date: "Feb 2025 - May 2025",
    points: [
      "Worked on Real-time Industrial Application of Microsoft Power Platforms.",
      "Gained hands-on experience with Azure cloud services and deployment.",
      "Collaborated with the team to optimize cloud-based solutions.",
    ],
  },
  {
    title: "Java Full Stack Intern",
    company_name: "Jay Blues Technology",
    icon: starbucks, 
    iconBg: "#383E56",
    date: "Internship",
    points: [
      "Worked on both Frontend and Backend development using Java technologies.",
      "Developed scalable web applications and managed database integration.",
      "Enhanced skills in Java, SQL, and web frameworks.",
    ],
  },
  {
    title: "Java Programming Intern",
    company_name: "Teragon, Hassan",
    icon: tesla, 
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Applied object-oriented principles to create efficient, modular Java applications.",
      "Learned core software development practices and coding standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kiran demonstrated exceptional problem-solving skills during the internship.",
    name: "Project Manager",
    designation: "Manager",
    company: "itree dynamics",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "A dedicated developer with a strong grasp of full-stack technologies.",
    name: "Tech Lead",
    designation: "Lead",
    company: "Jay Blues Tech",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// Projects Section from Resume
const projects = [
  {
    name: "Crop Disease Detection",
    description:
      "Implemented a deep learning model using Convolutional Neural Networks (CNN) to detect plant diseases from leaf images.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "DeepLearning",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Using placeholder image
    source_code_link: "https://github.com/",
  },
  {
    name: "School Management",
    description:
      "A web-based system for managing students, staff, attendance, and transportation. Includes dynamic pickup point mapping.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Using placeholder image
    source_code_link: "https://github.com/",
  },
  {
    name: "Gym Management",
    description:
      "Developed a web-based system for managing gym memberships, attendance, and billing.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Using placeholder image
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Gardening IoT",
    description:
      "Implemented an IoT-based system for automated plant care and real-time monitoring using Raspberry Pi.",
    tags: [
      {
        name: "iot",
        color: "blue-text-gradient",
      },
      {
        name: "raspberrypi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Using placeholder image
    source_code_link: "https://github.com/",
  },
  {
    name: "Automated Approval",
    description:
      "Built an automated Purchase Order approval workflow using Power Automate, integrating D365 F&O with Teams and Outlook.",
    tags: [
      {
        name: "power-automate",
        color: "blue-text-gradient",
      },
      {
        name: "D365",
        color: "green-text-gradient",
      },
      {
        name: "power-apps",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Using placeholder image
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };