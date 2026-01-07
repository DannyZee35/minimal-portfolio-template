import { ProjectCardProps } from "@/components/features/ProjectCard";
import { Achievement } from "@/components/features/Timeline";
import { WorkExperienceProps } from "@/sections/WorkExperience";
import { TestimonialProps } from "@/sections/TestimonialSections";

export const projectsData: ProjectCardProps[] = [
  {
    imageSrc: "/projects/design-system.jpg",
    title: "Core Design System",
    description: "A centralized library of accessible, reusable components and design tokens built for high-scale enterprise applications.",
    techStack: ["React", "TypeScript", "Tailwind", "Storybook"]
  },
  {
    imageSrc: "/projects/dashboard.jpg",
    title: "Analytics Dashboard",
    description: "High-performance data visualization interface focusing on real-time metrics and complex state management.",
    techStack: ["Next.js", "Zustand", "D3.js", "Postgres"]
  },
  {
    imageSrc: "/projects/ecommerce.jpg",
    title: "Modular Commerce Platform",
    description: "A headless e-commerce experience featuring fluid page transitions and an optimized multi-step checkout flow.",
    techStack: ["Next.js", "Stripe", "Sanity", "Motion"]
  },
  {
    imageSrc: "/projects/lab.jpg",
    title: "Interaction Lab",
    description: "An experimental project exploring physics-based animations and gesture-driven UI components for mobile web.",
    techStack: ["React", "Motion", "Three.js", "TypeScript"]
  },
  {
    imageSrc: "/projects/linear.jpg",
    title: "Linear Task Manager",
    description: "A keyboard-first productivity tool emphasizing speed, offline support, and seamless collaborative workflows.",
    techStack: ["Node.js", "Redis", "Tailwind", "Motion"]
  },
  {
    imageSrc: "/projects/portfolio.jpg",
    title: "Architectural Portfolio",
    description: "This very site—designed to showcase technical rigor through clean typography and minimal, grid-based layout.",
    techStack: ["Next.js", "Motion", "Tailwind", "Radix UI"]
  },
];


export const workExperienceData: WorkExperienceProps[] = [
  {
    companyName: "Google",
    role: "Design Engineer",
    description:
      "Spearheaded the development of core UI frameworks and design system components. Focused on bridging the gap between high-fidelity motion prototypes and production-ready React implementations.",
    startDate: "Jan 2021",
    endDate: "Dec 2021",
    companyLogo: "/work/google.png",
  },
  {
    companyName: "Amazon",
    role: "Product Engineer",
    description:
      "Architected scalable full-stack interfaces for complex internal tooling. Optimized frontend performance metrics and streamlined the developer handoff process through automated component documentation.",
    startDate: "Feb 2020",
    endDate: "Dec 2020",
    companyLogo: "/work/amazon.png",
  },
  {
    companyName: "Shopify",
    role: "UI Engineer",
    description:
      "Engineered merchant-facing dashboard experiences with a focus on accessibility and modularity. Built custom data visualization components and optimized state management for high-density interfaces.",
    startDate: "Aug 2019",
    endDate: "Jan 2020",
    companyLogo: "/work/shopify.png",
  },
  {
    companyName: "Microsoft",
    role: "Software Engineer Intern",
    description:
      "Contributed to the evolution of internal design languages. Developed interactive prototypes for mobile-first features and ensured design consistency across cross-platform system tools.",
    startDate: "Jun 2018",
    endDate: "Jul 2019",
    companyLogo: "/work/microsoft.png",
  },
];



export const testimonialsData: TestimonialProps[] = [
  {
    name: "Sarah Chen",
    avatar: "",
    testimonial:
      "One of the rare engineers who truly understands design intent. They don't just build components; they build systems that empower the whole team to move faster.",
    designation: "Product Lead, Vercel",
  },
  {
    name: "Marcus Thorne",
    avatar: "",
    testimonial:
      "The attention to detail in their motion work and interaction design is unmatched. They brought a level of polish to our dashboard that we didn't think was possible.",
    designation: "Senior UI Designer, Stripe",
  },
  {
    name: "Elena Rodriguez",
    avatar: "",
    testimonial:
      "Reliable, technically sharp, and a great communicator. They bridged the gap between our design team and the engineering backend perfectly during our scale-up phase.",
    designation: "CTO, Linear",
  },
  {
    name: "David Park",
    avatar: "",
    testimonial:
      "Lightning-fast execution without sacrificing code quality. They helped us refactor our design system in record time while keeping the user experience seamless.",
    designation: "Engineering Manager, Framer",
  },
];

export const achievements: Achievement[] = [
  {
    year: "2024",
    title: "Design System Architecture",
    description: [
      "Architected a multi-brand design system used across 4 separate product lines, reducing design-to-code latency by 40%.",
      "Implemented automated visual regression testing to ensure 100% UI consistency."
    ],
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    description: [
      "Contributed several performance-focused hooks to a major UI library, gaining over 500 stars on GitHub.",
      "Published a technical deep-dive on fluid motion and physics-based animation in React."
    ],
  },
  {
    year: "2022",
    title: "Frontend Leadership",
    description: [
      "Led a team of 5 developers to refactor a legacy dashboard into a modern, accessible Next.js application.",
      "Introduced strict TypeScript standards and a component-driven development workflow."
    ],
  },
  {
    year: "2021",
    title: "CS & Leadership Honors",
    description: [
      "Recognized for exceptional performance in Computer Science, focusing on Software Engineering patterns.",
      "Mentored 15+ junior students in modern frontend frameworks and design principles."
    ],
  },
];