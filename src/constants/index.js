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
    title: "AI ENTUSIAST",
    icon: web,
  },
  {
    title: "COMPUTER VISION ENTHUSIAST",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML ENGINEER",
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
    title: "",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      ".",
      ".",
      ".",
      ".",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      ".",
      ".",
      ".",
      ".",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      ".",
      ".",
      ".",
      ".",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      ".",
      ".",
      ".",
      ".",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hello! And welcome to the Los Pollos Hermanos family. My name is Gustavo, but you can call me Gus.  Each and every day, we serve our customers exceptional food, with impecable service. We take pride in everything that we do..",
    name: "Gustavo Fring",
    designation: "co-founder and entrepreneur and Drug Kingpin",
    company: "Los Pollos Hermanos",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLozx5ZtEAFNUQj7Z1AfauIjmVpVyIxGZkA&usqp=CAU",
  },
  {
    testimonial:
      "You clearly dont know who youre talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!.",
    name: "Walter white",
    designation: "Drug lord",
    company: "Breaking Bad",
    image: "https://img.itch.zone/aW1nLzg3MzM5NzkuanBn/347x500/C6YZ15.jpg",
  },
  {
    testimonial:
      "You, uh...you want to cook crystal meth? ",
    name: "Jesse Pinkman",
    designation: "METH manufacturer & distributor ",
    company: "breaking bad",
    image: "https://images.firestartoys.com/Products/FST0853GBA_1.jpg?w=400&h=400&quality=80&scale=canvas",
  },
];

const projects = [
  {
    name: "AIR CANVAS ML",
    description:
      "Ever wanted to draw your imagination by just waiving your finger in air So i have built an Air Canvas which can draw anything on it by just motion of our hands and noticing the landmark on the hand knuckels. We will be using the computer vision techniques of OpenCV to build this projectThe preffered language is python due to its exhaustive libraries and easy to use syntax but understanding the basics it can be implemented in any OpenCV supported language...",
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
    image: "https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/with-circle.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Forest Fire Prediction",
    description:
      "Forest Fire Prediction is a Supervised Machine learning problem statements. Using Regression and Classification Algorithm, Regression and Classification Model is build that detected future fires based on certain Weather report.A framework is created using Flask and deployed on Heroku For regression analysis FWI(Fire weather Index) considered as dependent feature because it highly correlated with classes variable with more than 90% correlation..",
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
    image: "https://user-images.githubusercontent.com/86904142/185993973-57c8f915-c1a6-4251-bd4c-9275dee94235.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "DATA VISUALIZTION",
    description:
      "Streamlit is a Python library for creating interactive web applications for data visualization. It simplifies the process of transforming data into charts, graphs, and tables. Streamlit supports popular visualization libraries like Matplotlib, Plotly, and Altair. It offers interactive components for user customization and real-time exploration. Streamlit integrates well with Pandas for data manipulation. Deployment is easy with Streamlit, allowing you to share your applications on platforms like Heroku. Overall, Streamlit is a valuable tool for creating dynamic and accessible data-driven applications.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://pyninja.com/wp-content/uploads/2023/02/ezgif.com-video-to-gif.gif",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
