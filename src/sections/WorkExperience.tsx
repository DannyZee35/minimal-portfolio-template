import { blogsData, workExperienceData } from '@/constants/data'
import Link from 'next/link';
import React from 'react'


export type workExperienceProps = {
    companyName: string;
        role: string;
    description: string;
    startDate: string;
    endDate: string;
    companyLogo:string
}
export const WorkExperience = () => {
    return (
        <>
            <div className=' line-b'>
                <div className='max-w-5xl mx-auto line-x  ' >
                   <div className=' px-8 py-8  line-b'>
                     <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">

                        Work Experience
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 ">
                        Protecting Gotham with strategy, discipline, and technology. By day,
                        I build enterprises. By night, I defend the city. Explore my work
                        below.
                    </p>
                   </div>
                    <div className="flex flex-col">
  {workExperienceData.map(
    ({ companyName, role, description, startDate, endDate, companyLogo }, index) => (
      <div key={index} className="flex w-full px-8 line-b">
        {/* Left side (company info) */}
        <div className="flex-1 line-r py-8">
          <div className="flex items-center gap-4">
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h2 className="text-lg font-bold">{companyName}</h2>
              <p className="text-md">{role}</p>
            </div>
          </div>
          <p className="text-md mt-3">{description}</p>
        </div>

        {/* Right side (dates) */}
        <div className="flex items-start px-8 py-8 w-[250px]">
          <p className="text-md">
            {startDate} – {endDate}
          </p>
        </div>
      </div>
    )
  )}
</div>


                </div>
            </div>



        </>
    )
}
