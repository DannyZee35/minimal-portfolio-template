
import { cn } from "@/lib/utils"

 



export const Heading = ({heading,className}:{heading:string,className?:string}) => {
    return (
        <h1 className={cn("text-2xl font-sans   font-bold tracking-tight text-gray-900 dark:text-white",className)}>
           {heading}
        </h1>
    )
}
