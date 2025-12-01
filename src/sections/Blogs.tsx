import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp';
import { ShimmerText } from '@/components/ui/ShimmerText';
import { blogsData } from '@/constants/data'
import Link from 'next/link';
import React from 'react'


export type blogsProps = {
    title: string;
    description: string;
    datePosted: string;
    link: string;
}
export const Blogs = () => {
    return (
        <>
            <div className=' line-b'>
                <div className='max-w-5xl mx-auto line-x  ' >
                   <div className=' px-8 py-8  line-b'>
                         <AnimateBlurFadeUp delay={.2}>
                 <ShimmerText text='Thoughts from the Batcave, mostly at night.' spread='16px'/>
                    </AnimateBlurFadeUp>
                  
                   </div>
                    <div className='flex flex-col '>
                        {blogsData.map(({ title, datePosted, description, link }, index) => (
                            <div key={index}   className='flex w-full px-8 line-b'>
                                <Link href={link} className='flex-1 line-r py-8'>

                                     
                                        <h2 className='text-lg font-bold'>{title}</h2>
                                        <p className='text-md mt-3'>{description}</p>
                                  
                                   
                                </Link>
                                 <p className=' px-8 py-8 w-[250px]'>{datePosted}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>



        </>
    )
}
