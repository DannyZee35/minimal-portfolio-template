import { Blogs } from "@/sections/Blogs"
import { getAllBlogs } from "@/lib/getSingleBlog"

export default async function BlogPage() {
  const allBlogs = await getAllBlogs()

  return (
    <section className="w-full min-h-screen">


      <section className="line-b pb-8 sm:pb-16 pt-24 px-5 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-zinc-900 dark:bg-zinc-100" />
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            Articles & Guides
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
          Insights on <br />
          <span className="text-zinc-400 dark:text-zinc-700">Design & Code.</span>
        </h1>

        <p className="max-w-xl mt-8 text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
          Sharing my thoughts on building better products, improving workflows, and
          the lessons learned along the way.
        </p>
      </section>


      <section className="py-12 px-5 sm:px-8">
        <Blogs blogs={allBlogs} />
      </section>
    </section>
  )
}