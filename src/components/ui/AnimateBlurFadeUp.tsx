"use client"
import React from 'react'
import { motion,MotionProps } from "motion/react"



type AnimateBlurProps = MotionProps & {
    children: React.ReactNode;
    initialBlur?: string;
    duration?: number;
    delay?: number;

}

export const AnimateBlurFadeUp = ({ children, initialBlur = "20px", duration=0.3, delay = 0 }: AnimateBlurProps) => {
    
    
    return (
        <motion.div
            initial={{
                opacity: 0,
                y:20,
                filter: `blur(${initialBlur})`
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)"
            }}
            transition={{
               duration,
               delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    )
}
