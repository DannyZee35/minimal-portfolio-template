import { ProjectCard } from '@/components/features/ProjectCard'
import { projectsData } from '@/constants/data'
import React from 'react'

export const Projects = () => {
  return (
    <>
    <div className=' line-b'>
  <div className='max-w-5xl mx-auto line-x px-8 py-8' >
        <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">

          Projects That make Impact
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 ">
          Protecting Gotham with strategy, discipline, and technology. By day,
          I build enterprises. By night, I defend the city. Explore my work
          below.
        </p>
         <div className='py-6 grid grid-cols-3 w-full gap-10 '>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </div>
    </div>
    
     

    </>
  )
}
