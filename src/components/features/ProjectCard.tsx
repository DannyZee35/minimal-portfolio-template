import Image from 'next/image'
import React from 'react'

export type projectCardProps = {
    imageSrc: string;
    title: string;
    description: string
}
export const ProjectCard: React.FC<projectCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className='flex flex-col gap-4'> 
            <div className='relative h-[200px] w-[300px] '>
                <Image src={imageSrc} fill alt='project Image' className='rounded-2xl object-cover' />
            </div>
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className='text-md'>{description}</p>
        </div>
    )
}
