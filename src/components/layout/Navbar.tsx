import React from 'react'
 
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileMenu } from './MobileMenu';


  const links = [
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {

  return (
 <>
 
   <header className="w-full backdrop-blur-md fixed top-0 left-0 z-40 h-full line-b ">
      <div className="flex items-center justify-between h-full  max-w-5xl mx-auto  ">
        <Link href="/" > <div className="font-bold text-xl tracking-wide   h-full  line-x p-5 ">
      <span>BW</span>
    </div> 
    </Link>
        <div className="flex items-center space-x-6 line-r p-3  h-full ">
          <NavLinks />
          <ThemeSwitcher />
         
           
       
        </div>
      </div>
       
    </header>
    <MobileMenu/>
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