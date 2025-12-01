"use client";
import React, { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import Link from "next/link";
import { HamburgerIcon, MenuIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="w-full backdrop-blur-md fixed top-0 left-0 z-40 h-full line-b">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto  ">
        <Link href="/">
          {" "}
          <div className="font-bold text-xl tracking-wide h-full line-x p-5 ">
            <span>BW</span>
          </div>{" "}
        </Link>
        <div className="flex items-center space-x-4 line-r p-3 h-full">
          <NavLinks />
          <button
            onClick={() => setShow(!show)}
            className="md:hidden size-10 rounded border border-gray-200 hover:bg-gray-200 transition text-gray-600 flex items-center justify-center"
          >
            <MenuIcon />
          </button>
          <ThemeToggle />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <NavLinksMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

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

const NavLinksMobile: React.FC = () => {
  return (
    <nav className="flex flex-col items-center space-y-8 py-4">
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
