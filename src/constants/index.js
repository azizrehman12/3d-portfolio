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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Desighner",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next js",
      icon: redux,
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
      title: "Frontend React Developer",
      company_name: "Code N Code IT Solutions",
     icon:  tesla , // Replace with the appropriate icon for Code N Code
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Developing and maintaining web applications using modern JavaScript frameworks.",
        "Integrating APIs into the frontend to create seamless and efficient user experiences.",
        "Collaborating with cross-functional teams to deliver high-quality products.",
        "Implementing responsive designs and optimizing web performance.",
      ],
    },
    {
      title: "Frontend Web Developer",
      company_name: "Code Alpha",
      icon: tesla, // Replace with the appropriate icon for Code Alpha
      iconBg: "#E6DEDD",
      date: "july 2024 - sep 2024",
      points: [
        "Worked on creating dynamic and visually appealing frontend components.",
        "Implemented reusable code and optimized frontend performance.",
        "Collaborated with team members to resolve bugs and improve UI/UX.",
      ],
    },
    {
      title: "Fronted Developer",
      company_name: "CognoRise Info Tech",
      icon: meta, // Replace with the appropriate icon for CognoRise
      iconBg: "#383E56",
      date: "July 2023 - Aug 2023",
      points: [
        "Worked on creating dynamic and visually appealing frontend components.",
        "Implemented reusable code and optimized frontend performance.",
        "Designed and prototyped user-friendly interfaces for web applications.",
        "Conducted user research to improve usability and visual appeal.",
        "Collaborated with developers to ensure design feasibility.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Prodigy Info Tech",
      icon: starbucks, // Replace with the appropriate icon for Prodigy
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Sep 2024",
      points: [
        "Created wireframes, mockups, and prototypes for client projects.",
        "Developed design strategies to align with client requirements.",
        "Worked closely with developers to ensure smooth design implementation.",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Flaxen_Erp",
      description:
        "Flexon ERP is a robust web-based platform designed for efficient enterprise resource planning. It empowers businesses to manage product assemblies, inventory, employee leaves, payroll periods, and more, all through a user-friendly interface. The system leverages Next.js, TypeScript, Redux Toolkit, and Ag-Grid for dynamic data management, providing scalable and streamlined solutions for operational needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/code-n-code-it-solutions",
    },
    {
      name: "Portfolio",
      description:
        "My portfolio, built with Next.js, showcases my skills and projects as a frontend developer. It provides a seamless and interactive user experience, highlighting my work in web development, UI/UX design, and various technologies, including React and TypeScript. The portfolio serves as a dynamic platform for potential clients and employers to explore my capabilities and achievements.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "Tailwend css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://aziz-rehman1-lyn5.vercel.app/",
    },
    {
      name: "Music Web",
      description:
        "A modern web-based platform designed to help individuals enhance their vocal abilities with greater clarity, freedom, and health. The site features a sleek and interactive user interface built with Next.js and Tailwind CSS, providing a seamless experience for users to explore courses and improve their singing and speaking skills. The platform's elegant design and engaging visuals create an inspiring environment for users to master their musical journey",

      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Spotlight animation",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/azizrehman12/Master-Art-of-music",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };