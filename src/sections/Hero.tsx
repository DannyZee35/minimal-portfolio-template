import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="  grid gap-8   lg:grid-cols-[3fr_2fr] items-center  ">
   
      <div className="  line-r">
        <div className="space-y-6 px-8 py-8 ">
            <p className="font-mono text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400">
          By Bruce Wayne
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          I am <span className="text-indigo-600 dark:text-indigo-400">Batman</span>.
          <br />
          A vigilante by night, innovator by day.
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Protecting Gotham with strategy, discipline, and technology. By day,
          I build enterprises. By night, I defend the city. Explore my work
          below.
        </p>
        </div>
        <div className="flex flex-wrap gap-4 line-y py-2 px-8">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      
    </section>
  );
};
