import { getAllBlogs } from "@/lib/getSingleBlog";
import { Blogs } from "@/sections/Blogs";
import { ContactSection } from "@/sections/ContactSection";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { TestimonialSections } from "@/sections/TestimonialSections";
import { WorkExperience } from "@/sections/WorkExperience";


export default async function Home() {
  const allBlogs = await getAllBlogs()
  return (
   <>
   
    <Hero/>
    <Projects/>
    <Blogs blogs={allBlogs}/>
    <WorkExperience/>
    <TestimonialSections/>
    <ContactSection/>
     
   </>
  );
}
