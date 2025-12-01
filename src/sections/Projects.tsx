"use client";
import { ProjectCard } from "@/components/features/ProjectCard";
import { DiagonalLines } from "@/components/ui/DiagonalLines";
import { ShimmerText } from "@/components/ui/ShimmerText";
import { projectsData } from "@/constants/data";
import { circOut, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

export const Projects = () => {
  const pathname = usePathname();

  const projectAnim = {
    hidden: { opacity: 0, scale: 1.15 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        opacity: {
          duration: 0.8,
          delay: i * 0.16,
          ease: circOut,
        },
        delay: i * 0.16, // each project appears after the previous
        duration: 0.5,
        ease: circOut,
      },
    }),
  };

  return (
    <>
      <div className=" line-b relative">
        <div className="absolute inset-0">
          <DiagonalLines />
        </div>
        <div className="max-w-5xl mx-auto line-x px-8 py-8 bg-white">
          {pathname === "/" && (
            <>
              <ShimmerText
                text="Projects That Even Alfred Approves"
                spread="50px"
              />
              <p className="max-w-2xl text-base text-gray-500 dark:text-gray-400 my-5 ">
                By day, I pretend to have a normal life. By night, I build tech
                that would make even the Joker raise an eyebrow. Explore my
                masterpieces (or experiments in chaos) below.
              </p>
            </>
          )}
          <div className="py-6 grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] w-full gap-10">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                variants={projectAnim}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}

            {pathname === "/projects" &&
              projectsData.slice(3, 6).map((project, index) => {
                const i = index + 3; // continue delay numbering
                return (
                  <motion.div
                    key={i}
                    variants={projectAnim}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
