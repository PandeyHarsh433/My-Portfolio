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
    name: "Re-Blog",
    description:
      "The Re-Blog is a platform built using the MERN stack, which comprises ReactJS for the frontend, NodeJS and Express for the backend, and MongoDB as the database. The platform allows users to create and publish their blogs, which can be viewed by anyone visiting the site.",
    githubLink: "https://github.com/PandeyHarsh433/blog-website",
    projectLink: "https://peaceful-cupcake-6ebc4d.netlify.app/",
    tech: ["Reactjs", "TailwindCSS"],
    photo: [Project2],
  },
  {
    name: "Movie-Searching",
    description:
      "This website is a platform built using ReactJS that allows users to browse and search for movies. The platform is designed to mimic the functionality of the popular movie database website, IMDB, with a sleek and user-friendly interface.To provide users with access to the latest movies and information, the platform fetches online movie data using the fetch() method. This allows the platform to quickly and easily retrieve information on new movies, ratings, reviews, and more.",
    githubLink: "https://github.com/PandeyHarsh433/IMDB-clone",
    projectLink: "https://movie-website-iota.vercel.app/",
    tech: ["Reactjs", "API handling"],
    photo: [Project3],
  },
  {
    name: "Shopping Website",
    description:
      "Crafted captivating frontend design for seamless UX, ensuring an immersive user experience.Developed dynamic pages with MongoDB integration, allowing for flexible and interactive content.Implemented a secure authentication system using Next.js and Express, ensuring user privacy and data protection.Efficient state management achieved through Redux integration, enhancing the overall performance of the application.",
    githubLink: "https://github.com/PandeyHarsh433/Shopping-Website",
    projectLink: "https://github.com/PandeyHarsh433/news-website",
    tech: ["Nextjs", "Redux", "Nodejs", "Mongodb", "Express"],
    photo: [Project4],
  },
  {
    name: "Hotel Managemant System", //project name
    description:
      "Hotel management app is an efficient and user-friendly tool for managing customer bookings in a hotel. The app is built using the MERN stack, which comprises ReactJS for the frontend, NodeJS and Express for the backend, and MongoDB as the database. The app provides an admin page with functionalities to add, delete, update and filter customer booking data.", //project description
    githubLink: "https://github.com/PandeyHarsh433/hotel-managment", //github repo link
    projectLink: "https://github.com/PandeyHarsh433/hotel-managment", //deployed project link
    tech: ["React", "Nodejs", "Mongodb", "Express"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [Project1], //list of names of images from above imports.
  },
];
