const Jobs = [
  {
    date: "Feb 2024 - Now",
    company: "SEEK",
    description: `I build full-stack features at SEEK, Australia’s leading employment
        marketplace, working across backend services and user-facing applications
        using React, TypeScript, Node.js, and GraphQL. My work involves designing
        and maintaining scalable systems on AWS, including Lambda, SQS, SNS, and
        DynamoDB, with a focus on reliable event-driven architectures. I’ve
        contributed to large-scale data systems powering Jora, Australia’s largest
        job aggregation platform, including web crawling and job ingestion
        pipelines. I’ve also worked with Ruby on Rails, PostgreSQL data
        warehousing, and Docker-based deployment workflows. Across roles, I focus
        on building reliable, scalable backend systems and improving system
        performance and maintainability.`,
  },
  {
    date: "Feb 2023 - Dec 2023",
    company: "Movio",
    description: `Responsible for ingesting movie analytics data from Postgres
        database and exposing relevant data to the UI using GraphQL in the
        data warehousing team. Developing dynamic and responsive user
        interfaces using React and Redux during the front-end rotation.
        `,
  },
  {
    date: "Apr 2022 – Sep 2022",
    company: "Risos Enterprise",
    description: `Implemented Python OpenCV library and signal processing techniques
        to identify water pathogens accurately. Implemented machine learning
        algorithm using TensorFlow & Google Colab to achieve image
        superresolution.`,
  },
  {
    date: "Nov 2021- Feb 2022",
    company: "Honeywell",
    description: `Implemented embedded controller logic and monitored upload to the
        point cloud server for the IoT data transmission via programming
        with company software. Developed GUI enabling accessible remote
        control for the HVAC system.`,
  },
];

export type ProjectLink = {
  frontend?: string;
  backend?: string;
};

export type Project = {
  title: string;
  description: string;
  imglink: string;
  tags?: string[];
  demo?: string;
  link?: string;
  links?: ProjectLink;
};

export const Projects: Project[] = [
  {
    title: "SlapMoji",
    description:
      "Slap together some pics and generate a GIF for your friend. React frontend with a Java backend that uploads images and applies GIF effects like zoom and wiggle.",
    tags: ["React", "Java", "Spring Boot"],
    demo: "https://slap-moji.vercel.app",
    links: {
      frontend: "https://github.com/zhua633/SlapMoji",
      backend: "https://github.com/zhua633/SalpMoji-backend",
    },
    imglink:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.svg",
  },
  {
    title: "OpenAI Atari Games",
    description:
      "Used TensorFlow to train OpenAI classic control and Atari games using reinforcement learning. Optimised the scoring and used AI to teach computer to play games!",
    tags: ["Python", "TensorFlow", "Reinforcement Learning"],
    link: "https://github.com/zhua633/COMPSYS726-Reinforcement-Learning",
    imglink:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.svg",
  },
  {
    title: "Old Personal Website",
    description:
      "Old legacy personal website developed using basic CSS and React concepts. This website is a better implementation of the latest learnt skills.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://zhua633.github.io/my-website/",
    imglink:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.svg",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Used alpha beta pruning to teach the computer to play a game of Tic Tac Toe. Be careful because the computer almost always win!",
    tags: ["Python", "Alpha-Beta Pruning"],
    link: "https://github.com/zhua633/Tic-Tac-Toe",
    imglink:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.svg",
  },
];

export default Jobs;
