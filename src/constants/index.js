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
  nextJs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  DecisionPointAnalytics,
  AvenueOne,
  Elev8Solar,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Cloud Developer",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Product Engineering Intern ",
    company_name: "Avenue One",
    company_url: "https://www.avenueone.com/",
    icon: AvenueOne,
    iconBg: "#E4E4E4",
    date: "May 2024 - December 2024",
    points: [
      "Architected a Transaction Management System for asset management, standardizing 100K+ data points across 10K+ properties, enabling data-driven optimization of rental leases, asset performance, and maintenance, projected to boost revenue by 30%",
      "Engineered a responsive frontend with Next.js and TypeScript, integrating AWS Lambda and Aurora RDS to enhance data flow and scalability, reducing deployment failures by 80% with SST and streamlining releases with CodePipeline",
      "Conceptualized User Interface triggered store procedures to ensure data consistency across database views accessed by Lambda functions, utilizing Liquibase to reduce data inconsistency by 60% and Docker to standardize database environments",
      "Structured backend architecture for complex reconciliation workflows, enabling actions like modification, rejection, and resolution of data discrepancies across property managers, reducing server costs and achieving 25% faster response times",
      "Automated reconciliation processes using Python scripts and AWS SQS to detect recurring data patterns among property managers, cutting manual effort by 85%",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Decision Point Analytics",
    company_url: "https://decisionpoint.ai/",
    icon: DecisionPointAnalytics,
    iconBg: "#E4E4E4",
    date: "June 2021 - July 2023",
    points: [
      "Enhanced code quality and maintainability across 3+ applications from prototype to deployment by leading debugging and testing efforts, reducing code defects by 20% and significantly improving long-term maintainability",
      "Established the TypeScript and React frontend for Beagle, a business insight tool featuring real-time collaboration, integrated with a custom NLP pipeline, OpenAI models, and a Python backend, earning Microsoft's 'App of the Year' award twice",
      "Spearheaded a team of 3 to design and innovate Beagle Charts, an interactive library for the Beagle with 25+ unique options using D3.js & Three.js, enhancing 3D data visualizations and customization, contributing to a 35% increase in user retention",
    ],
  },
  {
    title: "Co Founder & CTO",
    company_name: "Elev8 Solar",
    company_url: "https://elev8solar.in/",
    icon: Elev8Solar,
    iconBg: "#E4E4E4",
    date: "May 2022 - July 2023",
    points: [
      "Founded a solar energy startup, providing customized solutions through technical strategy, cost analysis, and client education, leading a 12-member team to achieve $50K+ in first-year revenue and complete over 100KW in solar installations",
      "Automated onboarding and project workflows using Python, Azure Logic Apps, and Azure DevOps Pipelines with Terraform, reducing setup time by 40% and accelerating transitions from consultation to deployment-ready proposals",
      "Crafted a data-driven cost analysis and ROI prediction tool using Python, Pandas, and Power BI, integrating local energy rates and installation costs to provide customers with transparent, data-backed financial insights on long-term solar benefits",
    ],
  },
];

const projects = [
  {
    name: "Hubble",
    description:
      "Hubble - RGM Capability Demonstration Tool is a dynamic web application developed for Decision Point Analytics. It exemplifies advanced data analytics in retail growth management, showcasing interactive data visualizations and predictive modeling. This tool highlights Decision Point's expertise in leveraging data for strategic retail insights, emphasizing user-friendly interfaces and actionable analytics. It serves as a practical demonstration of how Decision Point translates complex data into clear, impactful business strategies for retail growth and market analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://hubble-staging.decisionpoint.in/",
  },
  {
    name: "Covid Tracking Dashboard",
    description:
      "Web Application platform designed to provide real-time updates and data analysis related to the COVID-19 pandemic. It offers users access to current statistics, including infection rates, testing data, vaccination progress, and more. This website serves as a valuable resource for staying informed about the latest developments in the ongoing health crisis, with user-friendly features that make it easy to navigate and understand the pandemic's impact on a global and local scale.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://covidtrackernitish.netlify.app/",
  },
  {
    name: "College Management ERP",
    description:
      "College Management ERP is a comprehensive digital solution tailored for educational institutions. It streamlines and automates various administrative tasks within colleges, including student enrollment, attendance tracking, course management, and financial administration. This platform simplifies complex processes, enhances communication among students, faculty, and administrators, and provides data-driven insights to optimize decision-making. It is a powerful tool for modernizing and efficiently managing all aspects of college operations in one centralized platform.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "ajax",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nitishahuja/CollegeManagementERP",
  },
];

export { services, technologies, experiences, projects };
