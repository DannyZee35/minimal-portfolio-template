import { getAllBlogs } from '@/lib/getSingleBlog'
import Link from 'next/link'
import React from 'react'

const page = async() => {

  const allBlogs = await getAllBlogs()
  console.log("all blogs",allBlogs);
  
  
  return (
  <>
    <div>All Blogs</div>
    <div className='flex flex-col gap-5 '>
      
      {allBlogs.map((singleBlog,idx)=>(
        <Link href={`/blogs/${singleBlog.blog}`} key={idx} className="text-black">
        <h2 className='text-black text-2xl'>
     {singleBlog.frontmatter?.title}
        </h2>
<p>     {singleBlog.frontmatter?.description}
</p>
        </Link>
      ))}
    </div>
  </>
  )
}

export default page