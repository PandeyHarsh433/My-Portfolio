import blog1 from "../styles/projects/blog1.jpg";

export const custom_blogs = [
  // please add only upto 6 blogs for maintaining the ui
  {
    title: "Pre-Interview talk", //blog title
    description:
      "A nervous job interviewee shares their thoughts on the importance of being yourself, handling pressure, and taking the first step towards your goals.", //blog decription
    link: "https://techmaverick.hashnode.dev/pre-interview-talk", //link your blog here
    thumbnail: blog1,
    categories: ["web-dev", "interview", "first-blog"], //eg. web developement, prgramming, lifestyle etc.
  },
];

// uncomment the following code if you want to fetch your medium articles and comment out the custom blogs code above
// export const medium_blogs = { username: 'yourusername'}

// uncomment the following code if you want to fetch your devto articles and comment out the custom blogs code above
// export const dev_to = { username: 'yourusername'}
