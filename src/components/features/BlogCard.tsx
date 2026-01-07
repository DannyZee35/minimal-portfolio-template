import Image from "next/image"
import Link from "next/link"
import React from "react"

type BlogCardProps = {
  slug: string
  title: string
  description: string
  date: string
  image: string
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  description,
  date,
  image,
}) => {
  return (
    <Link href={`/blogs/${slug}`} className="group block outline-none">
      <div className="relative">

        <div
          className="
            absolute inset-0 rounded-3xl border border-dashed
            border-zinc-300 dark:border-zinc-700
            transition-all duration-500
            group-hover:translate-x-3 group-hover:translate-y-2
            pointer-events-none
          "
        />


        <div className="
          relative flex flex-col gap-4 p-3 rounded-3xl
          bg-white dark:bg-zinc-950 
          border border-zinc-200 dark:border-zinc-800
          transition-transform duration-500
          group-hover:-translate-x-1 group-hover:-translate-y-1
        ">

          <div className="relative h-[200px] w-full overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="
                object-cover transition-all duration-700
                grayscale group-hover:grayscale-0 group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>


          <div className="p-2 transition-transform duration-300 group-hover:translate-x-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-4 bg-indigo-500" />
              <p className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase">
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 line-clamp-2">
              {title}
            </h2>

            <p className="mt-2 text-sm truncate leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3 font-light">
              {description}
            </p>


            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
              <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-400">Read Blog</span>
              <span className="text-indigo-500">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}