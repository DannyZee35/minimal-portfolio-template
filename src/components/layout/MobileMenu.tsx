"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

type MobileMenuProps = {
  open: boolean;
  toggle: () => void;
};

const links = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-me" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  closed: {
    opacity: 0,
    x: -4
  },
  open: {
    opacity: 1,
    x: 0
  },
} as const;

export const MobileMenu = ({ open, toggle }: MobileMenuProps) => {
  return (
    <div className="md:hidden absolute inset-x-0 top-full z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mx-4 mt-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden"
          >

            <div className="px-6 py-3 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/40">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Menu
              </span>
            </div>

            <nav className="flex flex-col">
              {links.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="border-b last:border-none border-zinc-100 dark:border-zinc-900"
                >
                  <Link
                    href={link.href}
                    onClick={toggle}
                    className="flex items-center justify-between px-6 py-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
                  >
                    <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {link.name}
                    </span>


                    <div className="h-1.5 w-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>


            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};