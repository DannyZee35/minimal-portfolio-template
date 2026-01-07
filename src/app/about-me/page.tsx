import { Timeline } from '@/components/features/Timeline'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {

  return (
    <section className="bg-white dark:bg-zinc-950 transition-colors duration-500 pt-16">
      <div>

        <div className="grid grid-cols-1 lg:grid-cols-12 line-b">
          <div className="lg:col-span-8 px-5 sm:px-8 pt-24 line-r">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
              DESIGN <span className="text-indigo-500 italic">ENGINEER</span>.
              <span className="block text-2xl md:text-3xl font-light tracking-tight text-zinc-400 mt-4">
                Building the bridge between design and production.
              </span>
            </h1>

            <div className="mt-12 space-y-8 max-w-xl">
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                I specialize in crafting high-fidelity interfaces and scalable design systems.
                My work focuses on the space where aesthetic intent meets technical feasibility.
              </p>


              <div className="flex items-center gap-4 text-indigo-500 font-medium group cursor-pointer">
                <span className="h-[1px] w-12 bg-indigo-500 transition-all group-hover:w-20" />
                <span className="uppercase tracking-widest text-xs">View Technical Process</span>
              </div>
            </div>
          </div>


          <div className="lg:col-span-4 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-8">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <Image src="/avatars/profile.jpg" alt="Profile Pic" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12">


          <div className="lg:col-span-4 p-5 sm:p-8   line-r bg-zinc-50/50 dark:bg-zinc-900/10">
            <div className="sticky top-24">

              <Timeline />
            </div>
          </div>


          <div className="lg:col-span-8 p-5 sm:p-8   space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-zinc-900 dark:text-white font-bold italic text-sm">01. THE APPROACH</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Hi, I’m <span className="text-zinc-900 dark:text-white">John</span>. I believe that good design is a technical problem.
                  I’ve spent my career perfecting the handoff between pixels and code, ensuring that no detail is lost in translation.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-zinc-900 dark:text-white font-bold italic text-sm">02. THE STACK</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Currently pursuing CS with a focus on System Leadership. I operate at the intersection of
                  frontend architecture, fluid motion, and component-driven development.
                </p>
              </div>
            </div>


            <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <Image src="/projects/process.jpg" alt="Workspace" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 font-black text-6xl tracking-tighter uppercase select-none">CRAFTSMANSHIP</span>              </div>
            </div>

            <p className="text-2xl text-zinc-800 dark:text-zinc-200 font-light italic leading-snug">
              "Whether it’s <span className="text-indigo-500">mentoring engineers</span> or refining a design system,
              I find my best work where technology meets human interaction."
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}