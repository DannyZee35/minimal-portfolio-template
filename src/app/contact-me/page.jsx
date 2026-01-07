"use client"
import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp'
import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { Send } from 'lucide-react';

const page = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-zinc-950">

            <header className="line-b pb-8 sm:pb-16 pt-32 px-5 sm:px-8">
                <AnimateBlurFadeUp>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-indigo-600 dark:bg-indigo-400" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400">
                            Available for projects
                        </p>
                    </div>
                </AnimateBlurFadeUp>

                <AnimateBlurFadeUp delay={0.2}>
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
                        Let&apos;s build <br />
                        <span className="text-zinc-400 dark:text-zinc-700">something exceptional.</span>
                    </h1>
                </AnimateBlurFadeUp>
            </header>


            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 py-16">


                <div className="lg:col-span-2 space-y-12 px-5 sm:px-8">
                    <AnimateBlurFadeUp delay={0.3}>
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Contact Details</h3>
                            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-500 transition-colors">
                                <a href="mailto:hello@john.com">hello@john.com</a>
                            </p>
                            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                Based in Pakistan
                            </p>
                        </div>
                    </AnimateBlurFadeUp>

                    <AnimateBlurFadeUp delay={0.4}>
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Social Presence</h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/danial-ai' },
                                    { name: 'GitHub', url: 'https://github.com/DannyZee35' },
                                    { name: 'Dribbble', url: 'https://dribbble.com/yourname' },
                                    { name: 'X / Twitter', url: 'https://x.com/yourhandle' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-500 hover:text-indigo-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-[1px] w-4 bg-zinc-200 dark:bg-zinc-800 group-hover:w-8 group-hover:bg-indigo-500 transition-all" />
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimateBlurFadeUp>
                </div>


                <div className="lg:col-span-3 px-5 sm:px-8 lg:px-0 lg:pr-8">
                    <AnimateBlurFadeUp delay={0.5}>
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-focus-within:text-indigo-500 transition-colors">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-light"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-focus-within:text-indigo-500 transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-light"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-focus-within:text-indigo-500 transition-colors">How can I help?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project goals..."
                                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none font-light leading-relaxed"
                                />
                            </div>

                            <div className="flex items-center gap-6">
                                <ButtonComponent
                                    as="button"
                                    type="submit"
                                    icon={Send}
                                >
                                    Send Message
                                </ButtonComponent>
                                <p className="hidden sm:block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                                    Response time: ~24h
                                </p>
                            </div>

                        </form>
                    </AnimateBlurFadeUp>
                </div>

            </div>
        </div>
    )
}

export default page