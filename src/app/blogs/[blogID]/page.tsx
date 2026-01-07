import { getSingleBlog } from '@/lib/getSingleBlog';
import { redirect } from 'next/navigation';
import React from 'react';
import { ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';

const SingleBlogPage = async ({ params }: { params: { blogID: string } }) => {
    const { blogID } = params;
    const blog = await getSingleBlog(blogID);

    if (!blog) redirect("/blogs");

    const { content, frontmatter } = blog;

    return (
        <article className="w-full bg-white dark:bg-zinc-950">

            <nav className=" ">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between pt-24">
                    <Link href="/blogs" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-indigo-500 transition-colors">
                        <ArrowLeft className="w-3 h-3" /> Blogs
                    </Link>

                </div>
            </nav>


            <header className="relative pt-24 pb-16 overflow-hidden border-b border-zinc-100 dark:border-zinc-900">

                <div className="absolute top-10 left-10 text-[12vw] font-black text-zinc-50 dark:text-zinc-900/40 select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter">
                    {frontmatter.title}
                </div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <div className="space-y-8">


                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.85]">
                            {frontmatter.title}
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4">
                            <p className="max-w-xl text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                                {frontmatter.description}
                            </p>

                            <div className="flex flex-col gap-1 text-right">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 dark:text-zinc-700">Published On</span>
                                <span className="text-sm font-mono text-zinc-900 dark:text-zinc-100">{frontmatter.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {frontmatter.image && (
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="relative group">

                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-indigo-500 z-10" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-indigo-500 z-10" />

                        <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <img
                                src={frontmatter.image}
                                alt={frontmatter.title}
                                className="w-full aspect-[21/9] object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            )}


            <main className="max-w-3xl mx-auto px-6 py-20">
                <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none
                    prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-8
                    prose-headings:text-zinc-900 dark:prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
                    prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-20
                    prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-zinc-900 dark:prose-blockquote:text-zinc-100
                    prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-900/50 prose-blockquote:p-8
                    prose-strong:text-zinc-900 dark:prose-strong:text-white
                    prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-indigo-50 dark:prose-code:bg-indigo-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-img:rounded-none prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800">
                    {content}
                </div>


                <div className="mt-32 pt-16 border-t border-zinc-100 dark:border-zinc-900 flex flex-col items-center gap-12">
                    <div className="p-4 rounded-full border border-zinc-200 dark:border-zinc-800">
                        <Globe className="w-6 h-6 text-zinc-300 dark:text-zinc-700 animate-pulse" />
                    </div>
                    <Link href="/" className="group flex flex-col items-center gap-2 py-12">

                        <span className="text-sm font-bold border-b-2 border-transparent group-hover:border-indigo-500 transition-all">
                            All Blogs
                        </span>
                    </Link>
                </div>
            </main>
        </article>
    );
};

export default SingleBlogPage;