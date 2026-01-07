import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'outline';
  href?: string;
  as?: 'button' | 'a';
}

export const ButtonComponent = ({
  children,
  icon: Icon,
  variant = 'primary',
  className,
  href,
  as = 'button',
  ...props
}: ButtonProps) => {
  const baseStyles = cn(
    "flex items-center cursor-pointer justify-center gap-2 w-full sm:w-max px-10 py-4 rounded-full transition-all duration-300 font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
    variant === 'primary'
      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
      : "border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900",
    className
  );

  if (as === 'a' && href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
        {Icon && <Icon className="w-4 h-4" />}
      </Link>
    );
  }


  return (
    <button className={baseStyles} {...props}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};