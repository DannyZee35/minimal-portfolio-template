import Image from 'next/image'
import React from 'react'

export type projectCardProps = {
    imageSrc: string;
    title: string;
    description: string
}
export const ProjectCard: React.FC<projectCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="relative group cursor-pointer">
       
            <div className="absolute inset-0 border-dashed border border-gray-300 rounded-3xl transition-transform duration-300 group-hover:translate-x-2 pointer-events-none"></div>

           
            <div className="relative flex flex-col gap-4 p-4 rounded-3xl  ">
                <div className="relative h-[180px] w-full">
                    <Image src={imageSrc} fill alt="project Image" className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-102" />
                </div>
                <div className='transition-transform duration-300 group-hover:translate-x-4'>
                    <h2 className="text-base font-bold">{title}</h2>
                    <p className="text-sm mt-2">{description}</p>
                </div>
            </div>
        </div>

    )
}
