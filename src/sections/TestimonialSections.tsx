import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp';
import { ShimmerText } from '@/components/ui/ShimmerText';
import { testimonialsData } from '@/constants/data';
import React from 'react'


export type TestimonialProps = {
    name: string;
    avatar: string;
    testimonial: string;
    designation: string;
}
export const TestimonialSections = () => {
    const getInitials = (name: string) => {
        if (!name) return "";
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };
    return (
        <section className='relative overflow-hidden'>
            <div className='max-w-5xl mx-auto  bg-white dark:bg-zinc-950'>

                <div className='px-5 sm:px-8 py-12 line-b'>
                    <AnimateBlurFadeUp>
                        <ShimmerText text='Testimonials' spread='16px' />
                    </AnimateBlurFadeUp>
                    <AnimateBlurFadeUp delay={0.3}>
                        <p className="max-w-2xl mt-6 text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-light">

                            Kind words from colleagues and partners I’ve worked with to build
                            user-centric products and scalable design systems.
                        </p>
                    </AnimateBlurFadeUp>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2">
                    {testimonialsData.map(({ name, avatar, testimonial, designation }: TestimonialProps, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`
                                    relative flex flex-col justify-between h-[320px] p-5 sm:p-8 
                                    transition-colors duration-500 group
                                    hover:bg-zinc-50 dark:hover:bg-zinc-900/30
                                    ${!isEven ? 'md:line-r' : ''} 
                                    line-b
                                `}
                            >
                                <div className="relative">
                                    <span className="absolute -top-4 -left-2 text-6xl font-serif text-zinc-200 dark:text-zinc-800 pointer-events-none select-none">
                                        “
                                    </span>
                                    <p className="relative z-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light italic">
                                        {testimonial}
                                    </p>
                                </div>

                                <div className='flex items-center gap-4 mt-8'>

                                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shrink-0">
                                        {avatar && avatar.trim() !== "" ? (
                                            <img
                                                src={avatar}
                                                alt={name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        ) : (
                                            <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400">
                                                {getInitials(name)}
                                            </span>
                                        )}
                                    </div>


                                    <div className="flex flex-col">
                                        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
                                            {name}
                                        </h3>
                                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                                            {designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}