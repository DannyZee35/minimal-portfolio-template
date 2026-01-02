import { AnimateBlurFadeUp } from "@/components/ui/AnimateBlurFadeUp"
import { DiagonalLines } from "@/components/ui/DiagonalLines"
import { ShimmerText } from "@/components/ui/ShimmerText"
import { Mail, Phone } from "lucide-react"

import React from 'react'

export const ContactSection = () => {
    return (
        <>
            <div className=' relative'>
                <div className='absolute inset-0'>
                    <DiagonalLines />
                </div>
                <div className='max-w-5xl mx-auto line-x  bg-white dark:bg-zinc-950' >
                    <div className='line-b px-8 py-8'>
                        <AnimateBlurFadeUp  >
                            <ShimmerText text=" Contact the Batcave" spread="20px" />
                        </AnimateBlurFadeUp>
                        <AnimateBlurFadeUp delay={.1} >

                            <p className="max-w-base mt-5 text-lg text-gray-600 dark:text-gray-400 ">
                                Open for freelance missions and heroic collaborations. Send me a signal and let's see if we can save Gotham—or at least build something awesome.

                            </p>
                        </AnimateBlurFadeUp>

                    </div>
                    <div className=' grid grid-cols-3 w-full   relative'>

                        <div className='line-r py-6 px-8 col-span-12 sm:col-span-2 flex flex-col gap-5 '>
                            <div className="absolute -z-10   inset-0">
                                <DiagonalLines />
                            </div>
                            <div className='flex items-start gap-1 flex-col'>
                                <label htmlFor="email" className="dark:text-gray-300">Name</label>
                                <input type="text" name="name" id="name" className='w-full border border-gray-300  dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-zinc-900' />
                            </div>
                            <div className='flex items-start gap-1 flex-col'>
                                <label htmlFor="email" className="dark:text-gray-300">Email</label>
                                <input type="email" name="email" id="email" className='w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-zinc-900' />
                            </div>
                            <div className='flex items-start gap-1 flex-col'>
                                <label htmlFor="Message" className="dark:text-gray-300">Message</label>
                                <textarea rows={6} name="message" id="message" className='w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-zinc-900' />
                            </div>

                        </div>
                        <div className=" flex-col  hidden sm:flex ">

                            <div className="flex items-center gap-3 py-2 px-4">
                                <Mail className="w-5 h-5 dark:text-gray-300" />
                                <span className="  text-lg dark:text-gray-300">yourname@email.com</span>
                            </div>


                            <div className="flex items-center gap-3 line-y py-2 px-4">
                                <Phone className="w-5 h-5  dark:text-gray-300" />
                                <span className="text-gray-800 text-lg dark:text-gray-300">+92 300 1234567</span>
                            </div>
                            <DiagonalLines />


                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
