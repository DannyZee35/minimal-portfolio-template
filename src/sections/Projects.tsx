"use client"
import { ProjectCard } from '@/components/features/ProjectCard'
import { DiagonalLines } from '@/components/ui/DiagonalLines'
import { ShimmerText } from '@/components/ui/ShimmerText'
import { projectsData } from '@/constants/data'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Projects = () => {
  const pathname = usePathname()


  return (
    <>
      <div className=' line-b relative'>
       <div className='absolute inset-0'>
         <DiagonalLines/>
       </div>
        <div className='max-w-5xl mx-auto line-x px-8 py-8 bg-white' >
          {pathname === "/" && <>
            <ShimmerText text='Projects That Even Alfred Approves' spread='50px'/>
            <p className="max-w-2xl text-base text-gray-500 dark:text-gray-400 my-5 ">
             By day, I pretend to have a normal life. By night, I build tech that
              would make even the Joker raise an eyebrow. Explore my masterpieces
              (or experiments in chaos) below.
            </p>
          </>}
          <div className='py-6 grid grid-cols-3 w-full gap-10 '>
            {projectsData.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            {pathname === "/projects" && projectsData.slice(3, 6).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>



    </>
  )
}
