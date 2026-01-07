"use client"

import { AnimateBlurFadeUp } from "@/components/ui/AnimateBlurFadeUp"
import { ButtonComponent } from "@/components/ui/ButtonComponent"
import { DiagonalLines } from "@/components/ui/DiagonalLines"
import { ShimmerText } from "@/components/ui/ShimmerText"
import { Mail, Phone, Send } from "lucide-react"
import React from 'react'

export const ContactSection = () => {
    return (
        <section className='relative overflow-hidden line-t'>
            <div className='max-w-5xl mx-auto bg-white dark:bg-zinc-950 relative'>

                <div className='line-b px-5 sm:px-8 py-12'>
                    <AnimateBlurFadeUp>
                        <ShimmerText text="Let's build something meaningful" spread="24px" />
                    </AnimateBlurFadeUp>
                    <AnimateBlurFadeUp delay={0.1}>
                        <p className="max-w-2xl mt-6 text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-light">
                            Currently accepting new projects and consulting engagements.
                            If you have a concept that needs technical precision and design rigor,
                            I’d love to hear about it.
                        </p>
                    </AnimateBlurFadeUp>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 w-full'>

                    <div className='md:col-span-2 line-r p-5 sm:p-8 flex flex-col gap-10 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                            <div className='flex flex-col gap-2 group'>
                                <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-indigo-500 transition-colors">Project Lead / Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className='bg-transparent border-b border-gray-200 dark:border-zinc-800 py-2 outline-none focus:border-indigo-500 transition-all text-lg font-light'
                                />
                            </div>

                            <div className='flex flex-col gap-2 group'>
                                <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-indigo-500 transition-colors">Business Email</label>
                                <input
                                    type="email"
                                    placeholder="email@company.com"
                                    className='bg-transparent border-b border-gray-200 dark:border-zinc-800 py-2 outline-none focus:border-indigo-500 transition-all text-lg font-light'
                                />
                            </div>
                        </div>


                        <div className='flex flex-col gap-2 group'>
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-indigo-500 transition-colors">Project Brief</label>
                            <textarea
                                rows={4}
                                placeholder="Tell me about the goals and technical requirements..."
                                className='bg-transparent border-b border-gray-200 dark:border-zinc-800 py-2 outline-none focus:border-indigo-500 transition-all text-lg resize-none font-light'
                            />
                        </div>

                        <div className="flex items-center gap-6">
                            <ButtonComponent
                                as="button"
                                type="submit"
                                icon={Send}
                            >
                                Get in Touch
                            </ButtonComponent>
                            <span className="text-[10px] font-mono text-zinc-400 hidden sm:block">
                                *Typically responds within 24 hours
                            </span>
                        </div>
                    </div>


                    <div className="flex flex-col relative">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="flex flex-col gap-1 group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Email</p>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <Mail className="w-4 h-4 text-indigo-500" />
                                    <span className="text-sm font-medium dark:text-zinc-200">hello@yourdomain.com</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Phone Number</p>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <Phone className="w-4 h-4 text-indigo-500" />
                                    <span className="text-sm font-medium dark:text-zinc-200">+92 300 1234567</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto h-40 border-t border-gray-200 dark:border-gray-500 relative overflow-hidden opacity-50 flex items-center justify-center">
                            <p className="text-[10px] font-mono uppercase tracking-[0.5em] dark:text-gray-100 -rotate-90 opacity-20 whitespace-nowrap">
                                Design Engineering v2.0
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}