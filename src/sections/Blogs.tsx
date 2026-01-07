"use client"

import { AnimateBlurFadeUp } from '@/components/ui/AnimateBlurFadeUp';
import { ShimmerText } from '@/components/ui/ShimmerText';
import { BlogCard } from '@/components/features/BlogCard';
import { motion, Variants } from "motion/react"
import React from 'react'
import { usePathname } from 'next/navigation';

const blurVariants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(20px)" },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, delay: i * 0.1, ease: "easeOut" },
  }),
};

interface BlogsProps {
  blogs: any[];
}

export const Blogs = ({ blogs }: BlogsProps) => {
  const pathname = usePathname()
  return (
    <div className={`w-full  ${pathname !== "/blogs" && "line-b"}`}>
      <div className={` w-full `}>
        {pathname !== "/blogs" && <div className={`py-8 px-5 sm:px-8 line-b`}>
          <AnimateBlurFadeUp delay={0.2}>
            <ShimmerText text='Documenting the process, one pixel at a time.' spread='16px' />
          </AnimateBlurFadeUp>

          <AnimateBlurFadeUp delay={0.3}>
            <p className="max-w-2xl mt-6 text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-light">
              Technical write-ups, design deep-dives, and occasional observations on the state of digital interfaces.


            </p>
          </AnimateBlurFadeUp>
        </div>}

        <div className={`  grid grid-cols-1 sm:grid-cols-3 w-full gap-5 sm:gap-5  ${pathname !== "/blogs" && "px-5 sm:px-8 py-6"}`} >
          {blogs.slice(0, 3).map((blog, idx) => (
            <motion.div
              key={idx}
              variants={blurVariants}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              <BlogCard
                slug={blog.blog}
                title={blog.frontmatter?.title ?? "Untitled"}
                description={blog.frontmatter?.description ?? ""}
                date={blog.frontmatter?.date ?? ""}
                image={blog.frontmatter?.image ?? "/placeholder.png"}
              />
            </motion.div>
          ))}

          {pathname === "/blogs" &&
            blogs.slice(3, 6).map((blog, idx) => (
              <motion.div
                key={idx}
                variants={blurVariants}
                initial="initial"
                animate="animate"
                custom={idx}
              >
                <BlogCard
                  slug={blog.blog}
                  title={blog.frontmatter?.title ?? "Untitled"}
                  description={blog.frontmatter?.description ?? ""}
                  date={blog.frontmatter?.date ?? ""}
                  image={blog.frontmatter?.image ?? "/placeholder.png"}
                />
              </motion.div>

            ))}
        </div>

      </div>
    </div>
  )
}