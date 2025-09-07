import React from 'react'
import { ThemeToggle } from '../ui/ThemeToggle';


  const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {

  return (
   <header className="w-full   backdrop-blur-md fixed top-0 left-0 z-40 h-full  line-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full   ">
        <div className="font-bold text-xl tracking-wide line-r h-full p-5">
      DA
    </div>
        <div className="flex items-center space-x-6">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
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