import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  /*{ name: "Testimonials", link: "#testimonials" }*/,
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm always looking for new opportunities to learn and grow.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "I built this website using this",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a browser extension for football enthusiasts.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [

  {
    id: 1,
    title: "Football Saas Project",
    des: "An innovative Chrome extension designed to enhance the viewing experience of football fans and how they interact with football-related content",
    img: "/phoenix.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/tech/javascript.png", "/c.svg", "/tech/nodejs.png"],
    link: "",
  },
  {
    id: 2,
    title: "SubWatch",
    des: "Keep track of your subscriptions to stop paying for unwanted services.",
    img: "/subwatch.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn-ui.svg", "/Plaid.svg"],
    link: "https://github.com/BrandonNgoranNtam/SubWatch",
  },
  {
    id: 3,
    title: "Circles",
    des: "A user-friendly and intuitive social network platform that places seniors at the centre, surrounded by their social circles of family, friends, and caregivers",
    img: "/circles 1.svg",
    iconLists: ["/react-native-1.svg", "/tech/mongodb.png", "/tech/nodejs.png", "/firebase-1.svg", "/c.svg"],
    link: "https://circles-ucl.vercel.app/",
  }


];

export const testimonials = [
  {
    quote:
      "Collaborating with Brandon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brandon's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brandon is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "devoteam",
    img: "/Devoteam/Devoteam_idc3nZJ_EW_8.svg",
    nameImg: "/devoteam_name.svg",
  },
  {
    id: 2,
    name: "precise_support",
    img: "/precise_support_logo.png",
    nameImg: "/precise_support_name_white.png",
  },
  {
    id: 3,
    name: "BOYOtech",
    img: "/boyotechlogo-cropped.svg",
    nameImg: "/boyotechlogo-cropped (1).svg",
  },
];
export const technologies = [
  {
    name: "Java",
    icon: "/tech/java-icon.svg",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
  },
  {
    name: "Python",
    icon: "/tech/python-icon.svg",
  },
  {
    name: "Kotlin",
    icon: "/tech/kotlinlang-icon.svg",
  },
  {
    name: "Spring",
    icon: "/tech/springio-icon.svg",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
  },
  {
    name: "Next JS",
    icon: "/next-js (1).svg",
  },
  {
    name: "Flutter",
    icon: "/tech/flutterio-icon.svg",
  },
  {
    name: "PostgresSQL",
    icon: "/tech/postgresql-icon.svg",
  },
  {
    name: "MongoDB",
    icon: "/tech/mongodb.png",
  },
  {
    name: "git",
    icon: "/tech/git.png",
  },
  {
    name: "docker",
    icon: "/tech/docker.png",
  },
  {
    name: "GraphQL",
    icon: "/tech/graphql-icon.svg",
  },
  
];
export const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Precise Support",
    icon: '/precise_support_full.png',
    iconBg: "#E6DEDD",
    date: "Jun 2024",
    points: [
      "Fixed broken referral form by updating SMPTP server configuration.",
      "Fixed broken Wordpress pluging that was affecting the booking system",
      "Updated styling of the website to make it more visually appealing.",
      "Bugfixes and optimization of the website.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Electronic Arts",
    icon: '/Electronic_Arts-Logo.wine.svg',
    iconBg: "#E6DEDD",
    date: "Jun 2024",
    points: [
      "Proposed a new feature for the Sims 4 and wrote a Feature Proposal describing it to other stakeholders.",
      "Built a class diagram and created a header file in C++ with class definitions for each object.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Patched a bugfix and optimized the Sims 4 codebase by implementing an improved data structure.",
    ],
  },
  {
    title: "Technology Consulting Intern",
    company_name: "Accenture Australia",
    icon: '/Accenture-Logo.wine.svg',
    iconBg: "#E6DEDD",
    date: "Jun 2024",
    points: [
      "Designed a client product for Accenture Australia's public sector team.",
      "Developed interview strategies and questions to align client requirements with the project's design.",
      "Created a detailed process flow and design presentation for client review.",
      "Wrote user stories to pivot the project into an agile approach and keep the design in line with customer values.",
    ],
  },

  {
    title: "Solutions Architecture Intern",
    company_name: "AWS APAC (Online)",
    icon: '/Amazon_Web_Services-Logo.wine.svg',
    iconBg: "#E6DEDD",
    date: "Feb 2024",
    points: [
      "Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times",
      "Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "J.P. Morgan Chase & Co. (Online)",
    icon: '/jpmorgan.png',
    iconBg: "#E6DEDD",
    date: "Feb 2024",
    points: [
      "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
      "Fixed broken files in the repository to make web application output correctly.",
      "Used JPMorgan Chase’s open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor. Using React.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Devoteam",
    icon: "/Devoteam/Devoteam_idc3nZJ_EW_9.png",
    iconBg: "#E6DEDD",
    date: "February 2021 - May 2021",
    points: [
      "Developing and maintaining a streaming service using backend microservices in Java Spring Boot with Netflix OSS components and an Angular front-end.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality features key features such as user authentication, logging and the admin dashboard, prominently working on the backend microservices code in Java.",
      "Initiated a coding standards meeting to refactor parts of the existing code and set standards for better readability and comprehension of the code.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const skills = [
  {
    id: 1,
    title: "Backend Development",
    desc: "I create scalable backend systems using Java (Spring Boot), Python, and Node.js. I’m skilled in managing relational and non-relational databases, and developing efficient APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 2,
    title: "Frontend Development",
    desc: "I build dynamic, user-friendly interfaces with ReactJS and TypeScript. I focus on creating responsive designs with tools like Material-UI and Shadcn/ui for an optimal user experience.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Developer Analyst",
    desc: "I excel at analyzing and translating business needs into effective technical solutions. My analytical skills help bridge the gap between business requirements and development goals.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software, Web, and Mobile Development",
    desc: "I design and develop innovative software solutions, responsive websites, and functional mobile apps using Kotlin, React Native and Flutter, ensuring high-quality results across platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "Github",
    link: "https://github.com/BrandonNgoranNtam",
  },
  {
    id: 2,
    img: "/link.svg",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/brandon-ngoran-ntam/",
  },
];