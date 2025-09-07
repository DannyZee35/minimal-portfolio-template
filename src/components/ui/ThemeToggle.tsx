import React from "react";

export const ThemeToggle: React.FC = () => {
 

  return (
    <button
     
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Theme"
    >
     🌙
    </button>
  );
};
