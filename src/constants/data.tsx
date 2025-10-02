import { Achievement } from "@/app/about-me/page";
import { projectCardProps } from "@/components/features/ProjectCard";
import { blogsProps } from "@/sections/Blogs";
import { testimonialProps } from "@/sections/TestimonialSections";
import { workExperienceProps } from "@/sections/WorkExperience";
 
export const projectsData: projectCardProps[] = [
  {
    imageSrc: "/Frame 10.png",
    title: "Portfolio Website",
    description: "Even Batman needs a portfolio. This one helps me pretend I have a normal life."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "E-commerce App",
    description: "An e-commerce app so slick, even the Joker can’t mess with the checkout."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "Chat App",
    description: "Real-time chat, because Gotham deserves instant hero updates."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "Portfolio Website",
    description: "Another portfolio site. Alfred says I have too many, but I disagree."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "E-commerce App",
    description: "Stripe-powered, because even superheroes need secure transactions."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "Chat App",
    description: "Talk to your allies instantly—just don’t tell the villains."
  },
]


export const blogsData: blogsProps[] = [
  {
    title: "Bat-CSS Secrets",
    description: "Learning CSS in the Batcave: dark themes, sharp grids, and layouts that strike fear into villains.",
    datePosted: "Thursday, Feb 15, 2024",
    link: "/blog/bat-css-secrets"
  },
  {
    title: "JavaScript for Vigilantes",
    description: "Dodging bugs and catching callbacks faster than the Batmobile on a Gotham night.",
    datePosted: "Friday, Feb 16, 2024",
    link: "/blog/js-for-vigilantes"
  },
  {
    title: "Real-Time Crime Alerts",
    description: "Building chat and notification systems that keep Gotham’s heroes one step ahead of trouble.",
    datePosted: "Saturday, Feb 17, 2024",
    link: "/blog/real-time-crime-alerts"
  },
  {
    title: "Wayne Tech UX Tips",
    description: "Designing interfaces so smooth, even Alfred approves them before Batman storms in.",
    datePosted: "Sunday, Feb 18, 2024",
    link: "/blog/wayne-tech-ux-tips"
  },
  {
    title: "Securing Gotham Online",
    description: "Encryption, authentication, and other Bat-hacks to keep villains out of your data.",
    datePosted: "Monday, Feb 19, 2024",
    link: "/blog/securing-gotham-online"
  },
]

 
export const workExperienceData: workExperienceProps[] = [
  {
    companyName: "Google",
    role: "Frontend Developer",
    description:
      "Developed and maintained responsive web applications using React, TypeScript, and TailwindCSS. Collaborated with UX designers to deliver pixel-perfect, accessible, and scalable UI components.",
    startDate: "Jan 2021",
    endDate: "Dec 2021",
    companyLogo: "/work/google.png",
  },
  {
    companyName: "Amazon",
    role: "Full Stack Developer",
    description:
      "Built and optimized full-stack applications using Next.js, Node.js, and Express. Designed REST APIs, integrated third-party services (payments, analytics), and improved system performance by 20%.",
    startDate: "Feb 2020",
    endDate: "Dec 2020",
    companyLogo: "/work/amazon.png",
  },
  {
    companyName: "Shopify",
    role: "Backend Developer",
    description:
      "Implemented scalable and secure APIs with Express and MongoDB. Designed efficient database schemas, automated deployments with CI/CD pipelines, and reduced server response time by 15%.",
    startDate: "Aug 2019",
    endDate: "Jan 2020",
    companyLogo: "/work/shopify.png",
  },
  {
    companyName: "Microsoft",
    role: "Software Engineer Intern",
    description:
      "Contributed to the development of mobile-first features for internal tools. Wrote unit and integration tests, updated technical documentation, and participated in agile sprint planning.",
    startDate: "Jun 2018",
    endDate: "Jul 2019",
    companyLogo: "/work/microsoft.png",
  },
];



 export const testimonialsData: testimonialProps[] = [
  {
    name: "Bruce Wayne (Batman)",
    avatar: "/Frame 10.png",
    testimonial:
      "Faster than the Batmobile and just as precise. Gotham would be proud of their work. Every detail was considered, leaving no room for mistakes in the final product.",
    designation: "CEO, Wayne Enterprises",
  },
  {
    name: "Clark Kent (Superman)",
    avatar: "/Frame 10.png",
    testimonial:
      "Reliable and super-efficient, delivering results even I can’t fly past. Their commitment to quality is as strong as my Kryptonian resolve.",
    designation: "Reporter, Daily Planet",
  },
  {
    name: "Diana Prince (Wonder Woman)",
    avatar: "/Frame 10.png",
    testimonial:
      "Professional, heroic, and always on time. A team worthy of the Justice League, with creativity and technical expertise that would impress even the gods of Themyscira.",
    designation: "Ambassador, Themyscira",
  },
  {
    name: "Barry Allen (The Flash)",
    avatar: "/Frame 10.png",
    testimonial:
      "Lightning-fast responses and speedy delivery—rivaling even my own pace. Communication was clear, and every milestone was met without delay.",
    designation: "Forensic Scientist, Central City",
  },
  {
    name: "Arthur Curry (Aquaman)",
    avatar: "/Frame 10.png",
    testimonial:
      "Smooth, reliable, and always afloat under pressure. The team navigates challenges like I navigate the oceans—effortlessly and with precision.",
    designation: "King of Atlantis",
  },
  {
    name: "Hal Jordan (Green Lantern)",
    avatar: "/Frame 10.png",
    testimonial:
      "Creativity powered by pure will. Their work shines brighter than a Green Lantern ring, turning ambitious ideas into reality with flawless execution.",
    designation: "Pilot, Green Lantern Corps",
  },
];


export const achievements: Achievement[] = [
  {
    year: "2021",
    title: "Started Computer Science Degree",
    description: [
      "Began my journey in Computer Science.",
      "Focused on leadership & technology pathway.",
    ],
 
  },
  {
    year: "2022",
    title: "First Freelance Project",
    description: [
      "Developed and deployed a full-stack web app for a local business.",
      "Stack: Next.js, MongoDB, Tailwind CSS.",
    ],
    
  },
  {
    year: "2023",
    title: "Hackathon Winner",
    description: [
      "Won 1st place in a university hackathon.",
      "Created an AI-powered study tool with real-time feedback.",
    ],
   
  },
  {
    year: "2024",
    title: "Internship at Tech Company",
    description: [
      "Worked as a frontend developer on a SaaS dashboard.",
      "Gained experience with React, TypeScript, and large-scale systems.",
    ],
    
  },
]