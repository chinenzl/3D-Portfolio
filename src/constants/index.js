import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    wms,
    gelin,
    SnapInspect,
    realtor,
    attendance,
    threeD,
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
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
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
      title: "Graphic Designer",
      company_name: " WMS print and sign",
      icon: wms,
      iconBg: "#E6DEDD",
      date: "SEP 2023 – Present",
      points: [
        "Creative Design Leadership: Pioneered the conceptualization and execution of visually captivating designs for a variety of print products, including brochures, posters, social media graphics, and website layouts.",
        "Project Management: Collaborated with print completion teams and installation crews, ensuring designs adhered to project production and construction standards. Delivered designs consistently aligned with project objectives.",
        "Client Interaction: Directly engaged with clients to comprehend design requirements, provided regular updates, and incorporated feedback, thereby enhancing client satisfaction.",
        "Software Proficiency: Leveraged Adobe Creative Suite (Illustrator, PhotoShop) to translate design concepts into reality, consistently delivering high-quality and impactful visual effects.",
        "Print Production Management: Oversaw the end-to-end process of print production, ensuring the timely and accurate delivery of printed materials.",
        "Adaptability: Demonstrated flexibility by efficiently handling multiple projects simultaneously, meeting tight deadlines, and adapting to evolving design trends.",
      ],
    },
    {
      title: "Front End Developer (Part-Time)",
      company_name: "SnapInspect International LTD",
      icon: SnapInspect,
      iconBg: "#E6DEDD",
      date: "SEP 2022 – JUL 2023",
      points: [
        "Translated UI/UX designs into functional and visually appealing web pages using HTML, CSS, and JavaScript.",
        "Implemented interactive features using React.js to enhance user engagement.",
        "Contributed to debugging and troubleshooting efforts, identifying and fixing frontend bugs to improve application stability.",
        "Collaborated with backend developers to integrate frontend and backend components, ensuring seamless functionality.",
        "Engaged in code reviews and provided constructive feedback to peers, promoting code quality and best practices.",
      ],
    },
    {
      title: "Web Designer",
      company_name: "MILKYLOVE LTD (Green’s Health)",
      icon: gelin,
      iconBg: "#383E56",
      date: "APR 2017 - DEC 2019",
      points: [
        "Developed, maintained, and enhanced the front-end and back-end functionalities of the company's e-commerce website, ensuring a seamless user experience and optimal performance.",
        "Regularly updating and enhancing website content, design, and functionality has increased user engagement and sales. Collaborating closely with marketing and sales teams, integrating promotional activities, new product launches, and website improvements to achieve business goals.",
        "Utilized HTML, CSS, JavaScript, and CMS platforms to manage and update product listings, optimize page load times, and improve SEO rankings.",
        "Conducted regular quality assurance checks, bug fixes, and troubleshooting to maintain site functionality and eliminate user experience hindrances.",
        "Installation and maintenance of electronic equipment.",
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
      name: "Property Agent",
      description:
        "In this project, I've had the fantastic opportunity to build and deploy a fully functional real estate application using the latest versions of React, Firebase, and Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: realtor,
      source_code_link: "https://github.com/chinenzl/realtor-clone-react",
    },
    {
      name: "Attendance Management System",
      description:
        "This software is designed to manage student-related data within a school environment. The front-end development incorporates HTML, CSS, JavaScript, and the React framework. Additionally, the JavaScript library React-Bootstrap was utilized to enhance the user interface. On the back-end, the software is powered by Django, a Python-based framework. The database implementation relies on the lightweight SQLite3, integrated within the Django framework.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "SQLite3",
          color: "pink-text-gradient",
        },
      ],
      image: attendance,
      source_code_link: "https://github.com/chinenzl/Attendance",
    },
    {
      name: "3D Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: threeD,
      source_code_link: "https://github.com/chinenzl/3D-Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };