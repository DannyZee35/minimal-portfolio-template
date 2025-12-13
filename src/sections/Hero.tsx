
import { AnimateBlurFadeUp } from "@/components/ui/AnimateBlurFadeUp";
import { Heading } from "@/components/ui/Heading";
import { ShimmerText } from "@/components/ui/ShimmerText";
import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className=" line-b   ">
    



      <div className="max-w-5xl mx-auto line-x px-8">



        <div className="flex items-center justify-between">
          <div className="space-y-6  py-8 ">
<AnimateBlurFadeUp  >
            <p className=" font-mono text-sm uppercase tracking-widest text-gray-600   dark:text-gray-400">
              By Bruce Wayne
            </p></AnimateBlurFadeUp>
            <AnimateBlurFadeUp delay={.2}>

            <ShimmerText text="I am Batman" className="text-4xl " spread="20px"/>
            </AnimateBlurFadeUp>
   <AnimateBlurFadeUp delay={.3}  >
            <p className="max-w-xl text-base   text-gray-500 dark:text-gray-400  ">
              Fighting crime in Gotham because regular coding jobs weren't challenging enough.
              By day, I build apps. By night, I fight villains. Cape sold separately.
            </p></AnimateBlurFadeUp>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
         <div className="border-2  border-dashed border-gray-300 rounded-3xl p-2 rotate-6 hover:rotate-0 transition-all duration-300 ">
           <div className='relative h-[200px] w-[300px] '>
            <Image src={'/Frame 10.png'} fill alt='project Image' className=' h-full rounded-2xl object-cover' />


          </div>
         </div>
        </div>


      </div>

    </section>
  );
};
