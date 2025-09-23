import { Blogs } from "@/sections/Blogs";
import { ContactSection } from "@/sections/ContactSection";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { TestimonialSections } from "@/sections/TestimonialSections";
import { WorkExperience } from "@/sections/WorkExperience";


export default function Home() {
  return (
   <>
   
    <Hero/>
    <Projects/>
    <Blogs/>
    <WorkExperience/>
    <TestimonialSections/>
    <ContactSection/>
     
   </>
  );
}
