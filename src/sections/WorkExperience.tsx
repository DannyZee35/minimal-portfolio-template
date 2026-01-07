import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp';
import { ShimmerText } from '@/components/ui/ShimmerText';
import { workExperienceData } from '@/constants/data'
import Image from 'next/image';
import React from 'react'


export type WorkExperienceProps = {
  companyName: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  companyLogo: string;
}
export const WorkExperience = () => {
  return (
    <section className='relative overflow-hidden line-b'>



      <div className='max-w-5xl mx-auto   bg-white dark:bg-zinc-950 relative'>

        <div className='px-5 sm:px-8 py-12 line-b'>
          <AnimateBlurFadeUp>
            <ShimmerText text='Experience & Contributions' spread='32px' />
          </AnimateBlurFadeUp>
          <AnimateBlurFadeUp delay={0.3}>
            <p className="max-w-2xl mt-6 text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-light">
              A timeline of my journey at the intersection of design systems and frontend architecture.
              Helping teams ship better products by bridging the gap between design and technical reality.

            </p>
          </AnimateBlurFadeUp>
        </div>

        <div className="flex flex-col">
          {workExperienceData.map(
            ({ companyName, role, description, startDate, endDate, companyLogo }: WorkExperienceProps, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row w-full line-b hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-500"
              >

                <div className="flex-1 p-5 sm:p-8 md:line-r">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-500 uppercase">
                      {startDate} — {endDate}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {role}
                    </h2>
                    <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
                      {companyName}
                    </p>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl font-light">
                    {description}
                  </p>
                </div>


                <div className="w-full md:w-[280px] p-8 flex items-center justify-center md:justify-end bg-zinc-50/30 dark:bg-zinc-900/20">
                  <div className="relative group-hover:scale-110 transition-transform duration-500 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0">
                    <Image
                      src={companyLogo}
                      alt={`${companyName} logo`}
                      className="object-contain"
                      height={80}
                      width={120}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}