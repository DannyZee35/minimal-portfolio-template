"use client"

import { ProjectCard } from '@/components/features/ProjectCard'
import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp'
import { ShimmerText } from '@/components/ui/ShimmerText'
import { projectsData } from '@/constants/data'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion, Variants } from "motion/react"

export const Projects = () => {
  const pathname = usePathname()

  const blurVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(20px)",
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  } as const;

  return (
    <>
      <div className="line-b relative">
        <div className="absolute inset-0">

        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 bg-white dark:bg-zinc-950">
          {pathname === "/" && (
            <>
              <AnimateBlurFadeUp delay={0.2}>
                <ShimmerText
                  text="Crafting functional digital artifacts"
                  spread="50px"
                />
              </AnimateBlurFadeUp>

              <AnimateBlurFadeUp delay={0.3} duration={0.3}>
                <p className="max-w-2xl mt-6 text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-light">
                  A collection of projects where design systems meet engineering rigor.
                  Focused on building interfaces that feel as good as they function.
                  Explore the technical breakdowns and prototypes below.
                </p>
              </AnimateBlurFadeUp>
            </>
          )}


          <div className="py-6 grid grid-cols-1 sm:grid-cols-3 w-full gap-5 sm:gap-5">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                variants={blurVariants}
                custom={index}
                initial="initial"
                animate="animate"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}

            {pathname === "/projects" &&
              projectsData.slice(3, 6).map((project, index) => (
                <motion.div
                  key={index}
                  variants={blurVariants}
                  custom={index + 3}
                  initial="initial"
                  animate="animate"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
