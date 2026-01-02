"use client"
import { ProjectCard } from '@/components/features/ProjectCard'
import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp'
import { DiagonalLines } from '@/components/ui/DiagonalLines'
import { ShimmerText } from '@/components/ui/ShimmerText'
import { projectsData } from '@/constants/data'
import { usePathname } from 'next/navigation'
import React from 'react'
import {motion,MotionProps} from "motion/react"
export const Projects = () => {
  const pathname = usePathname()

  const blurVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(20px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration:0.3,
        ease: "easeOut"
      }
    }
  };
 
    const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.9  // works only if children have motion variants
      }
    }
  };
  return (
    <>
      <div className=' line-b relative'>
        <div className='absolute inset-0'>
          <DiagonalLines />
        </div>
        <div className='max-w-5xl mx-auto line-x px-8 py-8 bg-white dark:bg-zinc-950' >
          {pathname === "/" && <>
            <AnimateBlurFadeUp delay={.2}  >
              <ShimmerText text='Projects That Even Alfred Approves' spread='50px' />
            </AnimateBlurFadeUp>

            <AnimateBlurFadeUp delay={.3} duration={0.3}>

              <p className="max-w-2xl text-base text-gray-500 dark:text-gray-400 my-5 ">
                By day, I pretend to have a normal life. By night, I build tech that
                would make even the Joker raise an eyebrow. Explore my masterpieces
                (or experiments in chaos) below.
              </p>
            </AnimateBlurFadeUp>
          </>}
         <motion.div variants={containerVariants} initial="initial" animate="animate">

           <motion.div variants={blurVariants} className='py-6 grid grid-cols-1 sm:grid-cols-3 w-full gap-5 sm:gap-10 ' >
            {projectsData.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            {pathname === "/projects" && projectsData.slice(3, 6).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
         </motion.div>
        </div>
      </div>



    </>
  )
}
