import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp';
import { DiagonalLines } from '@/components/ui/DiagonalLines';
import { ShimmerText } from '@/components/ui/ShimmerText';
import { blogsData, workExperienceData } from '@/constants/data'
import Image from 'next/image';

import React from 'react'


export type workExperienceProps = {
  companyName: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  companyLogo: string
}
export const WorkExperience = () => {
  return (
    <>
      <div className='relative line-b'>
        <div className='absolute inset-0'>
          <DiagonalLines />
        </div>
        <div className='max-w-5xl mx-auto line-x  bg-white dark:bg-zinc-950' >
          <div className=' px-8 py-8  line-b'>
              <AnimateBlurFadeUp  >
            <ShimmerText text='Wayne Enterprises & Beyond' spread='30px' />
</AnimateBlurFadeUp>
          </div>
          <div className="flex flex-col">
            {workExperienceData.map(
              ({ companyName, role, description, startDate, endDate, companyLogo }, index) => (
                <div key={index} className="flex w-full flex-col sm:flex-row px-8 py-8 sm:py-0 sm:gap-0 gap-5 line-b">

                  <div className="flex-1 line-r sm:py-8">
                    <div className="flex items-center gap-4">

                      <div>
                        <h2 className="text-lg font-bold dark:text-gray-200">{companyName}</h2>
                        <p className="text-md dark:text-gray-300">{role} <span>{startDate} – {endDate}</span></p>
                      </div>
                    </div>
                    <p className="text-md mt-3 max-w-[600px] dark:text-gray-400">{description}</p>
                  </div>


                  <div className="flex items-start sm:justify-end sm:px-8  sm:py-8 w-[250px]">
                    <Image
                      src={companyLogo}
                      alt={`${companyName} logo`}
                      className="object-contain"
                      height={100}
                      width={80}
                    />

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
