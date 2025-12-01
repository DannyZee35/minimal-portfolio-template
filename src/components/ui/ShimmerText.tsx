import { cn } from '@/lib/utils'
import React from 'react'
import { DiagonalLines } from './DiagonalLines'



export const ShimmerText = ({ text, spread, className }: { text: string, spread: string, className?: string }) => {
    return (

        <div className='  w-fit p-2 bg-gray-100   relative '>
            <div className='size-1 bg-gray-300  absolute -left-px -top-px  animate-pulse' />
            <div className='size-1 bg-gray-300  absolute -right-px -top-px animate-pulse' />
            <div className='size-1 bg-gray-300  absolute -left-px -bottom-px animate-pulse' />
            <div className='size-1 bg-gray-300  absolute -right-px -bottom-px animate-pulse' />

            <div className="absolute z-10    inset-0">
                <DiagonalLines />
            </div>         <h2
                className={cn("text-base font-sans   font-bold tracking-tight inline-block   text-center text-transparent  animate-shimmer",
                    "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--shine-color),#0000_calc(50%+var(--spread)))]",
                    "bg-[length:250%_100%,auto] [background-repeat:no-repeat,padding-box] bg-clip-text",
                    "[--text-color:var(--color-text)]  [--shine-color:var(--color-white)]", className)}


                style={{
                    '--spread': spread,
                    '--highlight': '#ffffff',
                    backgroundImage: "var(--bg),linear-gradient(var(--text-color),var(--text-color)) ",


                } as React.CSSProperties}
            >
                {text}




            </h2>
        </div>
    )
}


 