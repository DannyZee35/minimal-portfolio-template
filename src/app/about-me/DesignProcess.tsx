"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface DesignProcessProps {
  images: string[];
}

export default function DesignProcess({ images }: DesignProcessProps) {
  return (
    <div className="flex items-center justify-center -ml-8">
      {images.map((src, i) => (
        <motion.div
          initial={{
            rotate: 0,
            translateY: 0,
            x: i * -128,
            filter: "blur(2px)",
          }}
          animate={{
            rotate: i % 2 === 0 ? 6 : -6,
            translateY: i % 3 === 0 ? -4 : 8,
            x: 0,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 75,
              duration: 0.6,
              delay: i * 0.05,
            },
          }}
          key={i}
          style={{
            zIndex: images.length - i,
          }}
          className={`
      relative size-[clamp(3.5rem,-1.163rem+18.653vw,8rem)] rounded-xl overflow-hidden object-cover
      -ml- first:ml-0
    `}
        >
          <Image
            src={src}
            alt={`Image ${i + 1}`}
            fill
            className="rounded-xl object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
