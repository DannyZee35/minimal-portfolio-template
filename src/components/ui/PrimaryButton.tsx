import React from "react";

interface PrimaryButtonProps {
  href: string;
  text: string;
}

export default function PrimaryButton({ href, text }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
    >
      {text}
    </a>
  );
}
