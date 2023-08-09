import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    olang,
    krucut,
    codi,
    ps,
    simpel,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Design",
      icon: backend,
    },
    {
      title: "Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
    {
      name: "photoshop",
      icon: ps,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];

  const projects = [
    {
      name: "O-Lang",
      description:
        "O-Lang was  a learning application for people what want to learn local language from all over Indonesia. This application provide task, audio. This design based on Duolingo application.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: olang,
      source_code_link: "https://www.figma.com/proto/9gvz7lebFm60VbGcwFHCii/Template-4-Kelompok-Galan's-Apps?page-id=0%3A1&type=design&node-id=291-1142&viewport=650%2C133%2C0.11&t=ZAoEv8vNFlIgvTIR-1&scaling=scale-down&starting-point-node-id=2%3A24&mode=design",
    },
    {
      name: "Kru Cut",
      description:
        "KRU CUT was an application for people that want to get a haircut without going outside of their house. This application design was inspired on GoJek application.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: krucut,
      source_code_link: "https://www.figma.com/proto/MdGKkQP9MhM5NmTMvlnSPd/Kru-Cut?page-id=0%3A1&type=design&node-id=7-2&viewport=280%2C193%2C0.15&t=LoiSJ1TXTLMQTtoP-1&scaling=scale-down&starting-point-node-id=3%3A2&mode=design",
    },
    {
      name: "CODI",
      description:
        "CODI was  an application for highschool or gapyear student that want to know more about the subject in their favorite major. This design was based on Pahamify application.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: codi,
      source_code_link: "https://www.figma.com/proto/CB1dvVEJWLMrM1f0vGymh2/CODI?page-id=0%3A1&type=design&node-id=1-3&viewport=156%2C332%2C0.15&t=gESzGxXWd2bSWJ9q-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design",
    },
    {
      name: "SIMPEL",
      description:
        "SIMPEL was  an application for company to help them improve their own employee by doing assessment for their worker.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
        },
        {
          name: "boostrap",
          color: "green-text-gradient",
        },
      ],
      image: simpel,
    },
  ];
  
  export { services, technologies, experiences, projects };