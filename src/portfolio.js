/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Rohan",
  logo_name: "Rohan.ch()",
  nickname: "itzrohan / Rooney",
  full_name: "Rohan Chaudhary",
  subTitle: "Full Stack Developer, Learning Enthusiast & A self-taught Programmer. Always learning.",
  resumeLink: "https://drive.google.com/file/d/1KYIxI_Iieme4nUfe82qT0PCZ8TjPJ36B/view",
  mail: "mailto:rohan.chaudhary29.rc@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Rohan2992",
  linkedin: "https://www.linkedin.com/in/rohan-chaudhary-a2bb3a260/",
  gmail: "rohan.chaudhary29.rc@gmail.com",
  tel: "Tel:+91",
  contactform: "",
  // "https://us9.list-manage.com/contact-form?u=3d3df8c91e9dce3b0897e2347&form_id=5685bf117664ef066f78acb001c0c4c8",

};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },

        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#860AFB",
          },
        },

        {
          skillName: "tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38BDF8",
          },
        },

        {
          skillName: "jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },

        {
          skillName: "github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Currently Pursuing my Bachelor's from ABES EC",
      subtitle: "Computer Programming and Engineering",
      logo_path: "readingImg.png",
      alt_name: "SETI",
      duration: "2020 - current",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for full Stack Web Development, Front-end Courses",
      ],
      website_link: "https://udemy.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Complete HTML & CSS Tutorials",
      subtitle: "TheAppBrewery",
      logo_path: "TheAppBrewery-Code.png",
      certificate_link: " ",
      alt_name: "TheAppBrewery",
      color_code: "#47A048",
    },
    {
      title: "The Complete Web Development Bootcamp",
      subtitle: "TheAppBrewery",
      logo_path: "TheAppBrewery-Code.png",
      certificate_link: "  ",
      alt_name: "TheAppBrewery",
      color_code: "#F6B808",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed various projects. I've mostly done projects on my own and I am actively looking for Projects. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  status: "OPEN TO WORK  !!!",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "App / Web Developer",
    //       company: "Upwork",
    //       company_url: "https://www.upwork.com/",
    //       logo_path: "upwork.png",
    //       duration: "June 2018 - Ongoing",
    //       location: "Remote",
    //       description: "Self Employed",
    //       color: "#2962FF",
    //     },
    //     {
    //       title: "Full Stack Developer",
    //       company: "Code Symphony",
    //       company_url:
    //         "https://www.upwork.com/o/companies/~018c7b6c9d5feb2c3f/",
    //       logo_path: "codesymphony.jpg",
    //       duration: "Mar 2022 - Ongoing",
    //       location: "Ahmedabad",
    //       description: "IT Services and IT Consulting.",
    //       color: "#2962FF",
    //     },
    //     {
    //       title: "Software Engineer",
    //       company: "Northstar technologies",
    //       company_url: "https://technorthstar.com/",
    //       logo_path: "NS-1.png",
    //       duration: "2022 - Ongoing",
    //       location: "Ahmedabad",
    //       description: "IT Services and IT Consulting.",
    //       color: "#2962FF",
    //     },
    //   ],
    // },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Front-End Developer",
    //       company: "Code Clause",
    //       company_url: " ",
    //       logo_path: "freshhut.jpg",
    //       duration: "Summer of 2019",
    //       location: "",
    //       description: "Develop a ecommerce app using native Android and PHP.",
    //       color: "#800000",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Mentor - Technorthstar",
    //       company: "Tech north star",
    //       company_url: "https://technorthstar.com/",
    //       logo_path: "NS-1.png",
    //       duration: "22",
    //       location: " ",
    //       description:
    //         "Mentorship responsibilities were to help freshers plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to Web Dev Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rohan.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
  },
  calendlySection: {
  },
};

const projects = {
  data: [
    {
      id: "50",
      name: "My - Youtube",
      url: "https://genuine-cupcake-cbd527.netlify.app/",
      description:
        "YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "51",
      name: "Food Ordering App",
      url: "https://food-ordering-app-rouge.vercel.app/",
      description: "Get Order for hundreds and thousands of dishes",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "0",
      name: "opPortfolio",
      url: "",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Calender Project",
      url: "https://rohan2992.github.io/Calender-Project/",
      description: "View and mark Important dates",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
