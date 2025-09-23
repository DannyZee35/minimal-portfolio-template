import { Mail, Phone } from "lucide-react"

import React from 'react'

export const ContactSection = () => {
    return (
        <>
            <div className=' line-b'>
                <div className='max-w-5xl mx-auto line-x ' >
                    <div className='line-b px-8 py-8'>
                        <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">

                            Contact Us
                        </h1>
                        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 ">
                            I'm open to freelancing offers. Reach out to me to inquire more about my work.

                        </p>
                    </div>
                    <div className=' grid grid-cols-3 w-full   '>
                        <div className='line-r py-6 px-8 col-span-2 flex flex-col gap-5 '>
                            <div className='flex items-start gap-1 flex-col'>
                                <label htmlFor="email">Name</label>
                                <input type="text" name="name" id="name" className='w-full border border-gray-300 rounded-lg p-2 text-sm' />
                            </div>
                            <div className='flex items-start gap-1 flex-col'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className='w-full border border-gray-300 rounded-lg p-2 text-sm' />
                            </div>
                            <div className='flex items-start gap-1 flex-col'>
                                <label htmlFor="Message">Message</label>
                                <textarea rows={6} name="message" id="message" className='w-full border border-gray-300 rounded-lg p-2 text-sm' />
                            </div>

                        </div>
                        <div className="flex flex-col   ">

                            <div className="flex items-center gap-3 py-2 px-4">
                                <Mail className="w-5 h-5  " />
                                <span className="  text-lg">yourname@email.com</span>
                            </div>


                            <div className="flex items-center gap-3 line-y py-2 px-4">
                                <Phone className="w-5 h-5 " />
                                <span className="text-gray-800 text-lg">+92 300 1234567</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
