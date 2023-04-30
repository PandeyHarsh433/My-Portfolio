// import project demo images as follows.
import Project1 from "../styles/projects/Project1.png";
import Project2 from "../styles/projects/Project2.png";
import Project3 from "../styles/projects/Project3.png";
import Project4 from "../styles/projects/Project4.png";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "Hotel Managemant System", //project name
    description:
      "Hotel management app is an efficient and user-friendly tool for managing customer bookings in a hotel. The app is built using the MERN stack, which comprises ReactJS for the frontend, NodeJS and Express for the backend, and MongoDB as the database. The app provides an admin page with functionalities to add, delete, update and filter customer booking data.", //project description
    githubLink: "https://github.com/PandeyHarsh433/hotel-managment", //github repo link
    projectLink: "https://github.com/PandeyHarsh433/hotel-managment", //deployed project link
    tech: ["React", "Nodejs", "Mongodb", "Express"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [Project1], //list of names of images from above imports.
  },
  {
    name: "Blogging Website",
    description:
      "The blogging website is a platform built using the MERN stack, which comprises ReactJS for the frontend, NodeJS and Express for the backend, and MongoDB as the database. The platform allows users to create and publish their blogs, which can be viewed by anyone visiting the site.",
    githubLink: "https://github.com/PandeyHarsh433/blog-website",
    projectLink: "https://github.com/PandeyHarsh433/blog-website",
    tech: ["Reactjs", "Nodejs", "Mongodb", "Express"],
    photo: [Project2],
  },
  {
    name: "IMDB clone",
    description:
      "The IMDB clone website is a platform built using ReactJS that allows users to browse and search for movies. The platform is designed to mimic the functionality of the popular movie database website, IMDB, with a sleek and user-friendly interface.To provide users with access to the latest movies and information, the platform fetches online movie data using the fetch() method. This allows the platform to quickly and easily retrieve information on new movies, ratings, reviews, and more.",
    githubLink: "https://github.com/PandeyHarsh433/IMDB-clone",
    projectLink: "https://imdb-clone-roan.vercel.app/",
    tech: ["Reactjs", "API handling"],
    photo: [Project3],
  },
  {
    name: "News Website",
    description:
      "The Next.js news app is a fast and modern web application designed to provide users with up-to-date news from various sources. Built using the Next.js framework, this app offers a seamless and optimized user experience with instant page loading and smooth navigation.With its intuitive and user-friendly interface, the Next.js news app allows users to easily browse and filter news articles by topic, date, and source. The app also features a powerful search engine that enables users to quickly find articles on specific topics or keywords.",
    githubLink: "https://github.com/PandeyHarsh433/news-website",
    projectLink: "https://github.com/PandeyHarsh433/news-website",
    tech: ["Nextjs", "CSR", "SSR"],
    photo: [Project4],
  },
];
