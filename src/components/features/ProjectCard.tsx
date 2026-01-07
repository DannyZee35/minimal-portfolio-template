import Image from 'next/image'
import React from 'react'

export type ProjectCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    techStack?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, techStack }) => {
    return (
        <div className="relative group cursor-pointer">

            <div className="absolute inset-0 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-3xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />

            <div className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 rounded-3xl transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 overflow-hidden">


                <div className="relative h-[180px] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                    <Image
                        src={imageSrc}
                        fill
                        alt={title}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />



                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className='p-4 space-y-4 transition-transform duration-300 group-hover:translate-x-1'>
                    <div>
                        <h2 className="text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
                            {title}
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 font-medium">
                            {description}
                        </p>
                    </div>


                    <div className="flex flex-wrap gap-1.5">
                        {techStack?.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-[9px] font-black uppercase tracking-widest 
                                           bg-zinc-100 dark:bg-zinc-900 
                                           text-zinc-600 dark:text-zinc-400 
                                           border border-zinc-200 dark:border-zinc-800 
                                           rounded-md group-hover:border-indigo-500/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>


                    <div className="pt-1 flex items-center gap-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                        <span className="text-[10px] font-black uppercase tracking-widest">Live Demo</span>
                        <div className="h-[1px] w-4 bg-indigo-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

