import { Projects } from "@/sections/Projects";
import React from "react";

function page() {
  return (
    <section className="line-b">
      <div className="line-x">
        <div className="relative z-10 line-b">
          <div className="max-w-5xl mx-auto px-8 py-8 line-x">
            <h1 className="text-4xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              I am{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Batman
              </span>
              .
              <br />A vigilante by night, innovator by day.
            </h1>
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Protecting Gotham with strategy, discipline, and technology. By
              day, I build enterprises. By night, I defend the city. Explore my
              work below.
            </p>
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default page;
