import { Projects } from '@/sections/Projects'
import React from 'react'

function page() {
  return (
    <section className="relative">

      <section className="line-b">
        <div className="bg-white dark:bg-zinc-950">
          <div className="px-5 sm:px-8 pb-8 sm:pb-16 pt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-indigo-600 dark:bg-indigo-400" />
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400">
                Selected Projects
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none">
              Work that connects <br />
              <span className="text-zinc-400 dark:text-zinc-600">design and code.</span>
            </h1>

            <p className="max-w-xl mt-8 text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              A showcase of my recent work, ranging from complex web applications to
              refined design systems. I focus on building products that are as
              technically sound as they are visually polished.
            </p>
          </div>
        </div>
      </section>


      <section>

        <Projects />
      </section>
    </section>
  )
}

export default page