//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "Harsh Pandey", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "pandeyharsh704@email.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "7081567775", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+91", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    {
      type: "github",
      link: "https://github.com/PandeyHarsh433",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/harshpandey007/",
      icon: faLinkedinIn,
    },
    {
      type: "twitter",
      link: "https://twitter.com/HarshPa58163449",
      icon: faTwitter,
    },
    {
      type: "facebook",
      link: "https://www.facebook.com/profile.php?id=100023977083779",
      icon: faFacebook,
    },
    {
      type: "instagram",
      link: "https://www.instagram.com/iharsh144/",
      icon: faInstagram,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "Hey there, I am Harsh.",
    subtitle:
      "I am experienced full stack web developer with an experience of 3 year with html , css and javascript working with many frameworks like React , Nextjs for frontend including Nodejs , Express for backend including Mongo and MySql as the database system.",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "Coding", // eg.frontend, backend, devops etc
      skills: ["Java", "C++", "Python"], //eg. react, html, python etc.
    },
    {
      category: "Frontend",
      skills: ["React", "Next", "Angular"],
    },
    {
      category: "Backend",
      skills: ["Nodejs", "Express"],
    },
    {
      category: "Database",
      skills: ["Mongodb", "MySql", "Firebase"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "As a full-stack web developer and Java coder, I possess a wide range of technical skills that enable me to create high-quality web applications. I am also an avid reader and enjoy traveling, which has broadened my perspective and given me a better understanding of different cultures. With excellent time management skills and strong communication abilities, I am able to effectively manage projects and collaborate with others. Additionally, I have an entrepreneurial mindset and am always looking for ways to turn my ideas into successful ventures.",
    resume:
      "https://drive.google.com/file/d/1v_24dBWS90MhzmcVKK6e-VJlBI17XrDz/view?usp=sharing", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "Aug 2024", //timespan
        title: "BTech", //eg. BTech in Compuster Engineering
        organization: "Lovely Professional University", //eg. VJTI, Mumbai
        description: "CGPA - 8", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "June 2017",
        title: "High School",
        organization: "Blooming Buds Academy",
        description: "CGPA - 10",
      },
      {
        time: "June 2019",
        title: "Intermediate",
        organization: "Sarla Intel Academy",
        description: "%age - 67%",
      },
    ],
  },
  experience: {
    visible: false, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Hotel Managment System", //company name eg.Microsoft
        companylogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*", //companylogo
        position: "Regional Manager", //post you held eg.Senior SDE
        time: "March 2020 - May 2020", //timespan
        description:
          "Hotel management app is an efficient and user-friendly tool for managing customer bookings in a hotel. The app is built using the MERN stack, which comprises ReactJS for the frontend, NodeJS and Express for the backend, and MongoDB as the database. The app provides an admin page with functionalities to add, delete, update and filter customer booking data.",
      },
      {
        company: "Hotel Managment System",
        companylogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      },
      {
        company: "Dunder Mifflin",
        companylogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: true,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
