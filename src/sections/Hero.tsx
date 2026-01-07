"use client"

import { AnimateBlurFadeUp } from "@/components/ui/AnimateBlurFadeUp";
import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { ShimmerText } from "@/components/ui/ShimmerText";
import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="line-b pt-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative bg-white dark:bg-zinc-950">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-16">


          <div className="flex-1 flex flex-col items-start text-left space-y-8 w-full">

            <AnimateBlurFadeUp>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-indigo-500" />
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-indigo-500">
                  Design Engineer
                </p>
              </div>
            </AnimateBlurFadeUp>

            <div className="space-y-4 w-full">
              <AnimateBlurFadeUp delay={0.2}>
                <div className="flex justify-start">
                  <ShimmerText
                    text="Code that feels like design"
                    className="text-2xl md:text-5xl font-black tracking-tighter"
                    spread="44px"
                  />
                </div>
              </AnimateBlurFadeUp>

              <AnimateBlurFadeUp delay={0.3}>
                <p className="max-w-xl text-lg md:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-light">
                  I bridge the gap between design intent and technical execution.
                  Specializing in design systems, fluid motion, and interfaces that don&apos;t just look good—they perform.


                  <span className="flex flex-col gap-2 mt-6">
                    <span className="flex items-center gap-2 text-sm font-mono text-zinc-400 dark:text-zinc-600">
                      <span className="h-1 w-1 rounded-full bg-indigo-500" />
                      Obsessed with 4px grids and 0ms latency.
                    </span>
                    <span className="text-xs text-zinc-300 dark:text-zinc-800 italic">
                      *No, I won&apos;t make the logo bigger.
                    </span>
                  </span>
                </p>
              </AnimateBlurFadeUp>
            </div>

            <AnimateBlurFadeUp delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-4">
                <ButtonComponent
                  as="a"
                  href="/projects"

                >
                  View Projects
                </ButtonComponent>

                <ButtonComponent
                  as="a"
                  href="/contact-me"
                  variant="outline"

                >
                  Contact Me
                </ButtonComponent>
              </div>
            </AnimateBlurFadeUp>
          </div>


          <div className="flex-shrink-0 relative">
            <AnimateBlurFadeUp delay={0.5}>
              <div className="relative group">


                <div className="absolute inset-0 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-[2.5rem] translate-x-4 translate-y-4 transition-transform duration-500" />

                <div className="relative h-[360px] w-[280px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-2xl overflow-hidden">
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src='/avatars/profile.jpg'
                      fill
                      alt='Design Engineer'
                      className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
                    />

                  </div>
                </div>
              </div>
            </AnimateBlurFadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};