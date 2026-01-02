import { getSingleBlog } from '@/lib/getSingleBlog';
import { redirect } from 'next/navigation';
import React from 'react'

const SingleBlogPage = async ({
    params
}: {
    params: {
        blogID: string;
    }
}) => {
    const blogID = params.blogID;

const blog = await getSingleBlog(blogID) 

    if(!blog){
        redirect("/blogs")
    }
   const { content,frontmatter } =blog;
    return (
        <div className='prose-lg'>{content} </div>
    )
}


export default SingleBlogPage;