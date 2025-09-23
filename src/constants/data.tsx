import { projectCardProps } from "@/components/features/ProjectCard";
import { blogsProps } from "@/sections/Blogs";
import { testimonialProps } from "@/sections/TestimonialSections";
import { workExperienceProps } from "@/sections/WorkExperience";


export const projectsData: projectCardProps[] = [
  {
    imageSrc: "/Frame 10.png",
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "E-commerce App",
    description: "A full-stack e-commerce application with Stripe payment integration."
  },
  {
    imageSrc: "/Frame 10.png",
    title: "Chat App",
    description: "A real-time chat application using React, Node.js, and Socket.IO."
  }
]


export const blogsData: blogsProps[] = [
  {
    title: "Advanced CSS Techniques for Modern Web Development",
    description: "Explore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modern layout patterns that will tak...",
    datePosted: "Thursday, Feb 15, 2024",
    link: "/blog"
  },
  {
    title: "Advanced CSS Techniques for Modern Web Development",
    description: " , Custom Properties, and modern layout patterns that will tak...",
    datePosted: "Thursday, Feb 15, 2024",
    link: "/blog"
  },
  {
    title: "Advanced CSS Techniques for Modern Web Development",
    description: "Explore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modernExplore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modern layout patterns that will tak layout patterns that will tak...",
    datePosted: " , Feb 15, 2024",
    link: "/blog"
  },
]

 

export const workExperienceData: workExperienceProps[] = [
  {
    companyName: "TechNova Solutions",
    role: "Frontend Developer",
    description:
      "Built and maintained responsive web applications using React, TypeScript, and TailwindCSS. Collaborated with designers to create pixel-perfect UI components.",
    startDate: "Jan 2021",
    endDate: "Dec 2021",
    companyLogo: "/Frame 10.png",
  },
  {
    companyName: "InnoSoft Labs",
    role: "Full Stack Developer",
    description:
      "Developed full-stack applications with Next.js and Node.js. k applications with Next.js and Node.js. Designed REST APIs aDesigned REST APIs and integrated with third-party services for payments and analytics.",
    startDate: "Feb 2020",
    endDate: "Dec 2020",
    companyLogo: "/Frame 10.png",
  },
  {
    companyName: "CloudEdge Technologies",
    role: "Backend Developer",
    description:
      "Implemented scalable APIs using Express and MongoDB. Focused on performance optimization, database schema design, and deployment automation.",
    startDate: "Aug 2019",
    endDate: "Jan 2020",
    companyLogo: "/Frame 10.png",
  },
  {
    companyName: "Visionary Apps",
    role: "Software Engineer Intern",
    description:
      "Assisted in developing mobile-first features, wrote unit tests, and contributed to documentation. Learned agile development practices.",
    startDate: "Jun 2018",
    endDate: "Jul 2019",
    companyLogo: "/Frame 10.png",
  },
  {
    companyName: "NextGen Systems",
    role: "UI/UX Engineer",
    description:
      "Designed and implemented reusable UI components. Conducted user research and usability testing to improve overall customer experience.",
    startDate: "Jan 2017",
    endDate: "May 2018",
    companyLogo: "/Frame 10.png",
  },
  {
    companyName: "DataWorks Inc.",
    role: "Junior Web Developer",
    description:
      "Maintained existing websites, fixed bugs, and implemented small new features. Gained foundational experience in HTML, CSS, and JavaScript.",
    startDate: "Sep 2016",
    endDate: "Dec 2016",
    companyLogo: "/Frame 10.png",
  },
];



export const testimonialsData: testimonialProps[] = [
  {
    name: "Sarah Johnson",
    avatar: "/Frame 10.png",
    testimonial:
      "Working with this team was an absolute pleasure. They understood our requirements quickly and delivered a polished product that exceeded expectations.",
    designation: "Product Manager, TechNova",
  },
  {
    name: "Michael Lee",
    avatar: "/Frame 10.png",
    testimonial:
      "Their attention to detail and commitment to quality really stood out. I’d highly recommend them for any web development project.",
    designation: "CTO, CloudEdge Solutions",
  },
  {
    name: "Emily Davis",
    avatar: "/Frame 10.png",
    testimonial:
      "A fantastic experience! The project was completed on time, communication was clear, and the results were outstanding.",
    designation: "Founder, Visionary Apps",
  },
  {
    name: "Daniel Smith",
    avatar: "/Frame 10.png",
    testimonial:
      "They bring a perfect balance of creativity and technical expertise. We loved how smoothly the collaboration went.",
    designation: "Lead Designer, InnoSoft Labs",
  },
  {
    name: "Sophia Martinez",
    avatar: "/Frame 10.png",
    testimonial:
      "Professional, reliable, and innovative. They truly care about the success of the project and go the extra mile.",
    designation: "CEO, NextGen Systems",
  },
  {
    name: "James Wilson",
    avatar: "/Frame 10.png",
    testimonial:
      "The team was proactive in suggesting improvements that made the final product even better. Highly satisfied with the work!",
    designation: "Operations Head, DataWorks Inc.",
  },
];