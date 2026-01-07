"use client"
import React, { useState } from 'react'

import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileMenu } from './MobileMenu';
import { IconMenu2, IconX } from "@tabler/icons-react";


const links = [
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-me" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>


      <header className="fixed  top-0 left-0 right-0 w-full backdrop-blur-md z-50 h-16 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between h-16  max-w-[1124px] mx-auto  dark:text-gray-200 ">
          <Link href="/" > <div className="font-bold text-xl tracking-wide line-l p-5  h-full  ">
            <span>BW</span>
          </div>
          </Link>
          <div className="flex items-center space-x-6 line-r p-3  h-full ">
            <NavLinks />
            <ThemeSwitcher />
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="p-2">
                {open ? (
                  <IconX className="w-7 h-7 text-gray-800 dark:text-gray-200" />
                ) : (
                  <IconMenu2 className="w-7 h-7 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            </div>



          </div>
        </div>
        <MobileMenu open={open} toggle={() => setOpen(false)} />
      </header>
    </>
  )
}



const NavLinks: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};