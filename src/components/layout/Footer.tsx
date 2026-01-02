import { FaGithub,FaTwitter,FaLinkedinIn } from "react-icons/fa";
 

import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <section className=" line-y ">
      <div className="max-w-5xl mx-auto line-x  flex items-center justify-between">
        <p className="px-8 dark:text-gray-400">Made with Love by Danial Aziz.</p>


        <div className="flex  ">
          <Link href={"/github"} className="line-l p-4">
           <FaGithub size={20} className="text-gray-950 dark:text-gray-300"/>

          </Link>
<Link href={"/github" } className="line-x p-4">
           <FaTwitter size={20} className="text-gray-950 dark:text-gray-300" />

          </Link>
          <Link href={"/github"} className="p-4">
           <FaLinkedinIn size={20} className="text-gray-950 dark:text-gray-300"/>

          </Link>
        </div>

      </div>

    </section>
  );
};
