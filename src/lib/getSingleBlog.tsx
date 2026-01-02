import {promises as fs} from "fs"
import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"

type FrontMatter={
    title:string;
    description:string;
    date:string;
    image:string;
}


export const getSingleBlog = async(blogID: string) => {
    try {
        const blog =await fs.readFile(
        path.join(process.cwd(),"src", "constants", "blogs",`${blogID}`,"page.mdx"),"utf-8", )

           if(!blog){
        return null
    }

     const {content, frontmatter}= await compileMDX<{title:string}>({
        source:blog,
        options:{parseFrontmatter:true}
    })
        return { content, frontmatter };
    

    

 
    } catch (error) {
        console.log("blog error",error);
        return null
        
    }
    
}



 

export const getFrontmatter = async(blogID:string)=>{
     const blog =await fs.readFile(
        path.join(process.cwd(),"src", "constants", "blogs",`${blogID}`,"page.mdx"),"utf-8", )

                 if(!blog){
        return null
    }

       const {  frontmatter}= await compileMDX<FrontMatter>({
        source:blog,
        options:{parseFrontmatter:true}
    })
        return {  frontmatter };
    
}

export const getAllBlogs=async()=>{
    const files = await fs.readdir(path.join(process.cwd(),"src", "constants", "blogs"));

    const allBLogs = await Promise.all(files.map(async file => {
        const blog =file.replace('.mdx','');
        const frontmatter = await getFrontmatter(blog)
        return {
            blog,
            ...frontmatter
        }
    }))
    return allBLogs

}