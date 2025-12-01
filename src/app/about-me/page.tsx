import { Timeline } from "@/components/features/Timeline";
import React from "react";
import DesignProcess from "./DesignProcess";

export type Achievement = {
  year: string;
  title: string;
  description: string[];
};

function page() {
  const images = [
    "/Frame 10.png",
    "/Frame 10.png",
    "/Frame 10.png",
    "/Frame 10.png",
    "/Frame 10.png",
  ];

  return (
    <section className=" line-b ">
      <div>
        <div className="flex line-x  max-w-5xl mx-auto items-center relative justify-center py-10 flex-col  ">
          <div className="w-full h-full absolute  [background-image:radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="space-y-6 px-8  py-8 relative z-10 ">
            <h1 className="text-4xl italic text-center lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              I am{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Batman
              </span>
              .
              <br />A vigilante by night, innovator by day.
            </h1>
            <p className="max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
              Protecting Gotham with strategy, discipline, and technology. By
              day, I build enterprises. By night, I defend the city. Explore my
              work below.
            </p>
          </div>

          <DesignProcess images={images} />
        </div>

        <div className="line-t">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-5 line-x">
            <div className="col-span-3 line-r space-y-4 p-8 text-lg ">
              <p className="text-gray-700 leading-relaxed">
                Hi, I’m{" "}
                <span className="font-semibold text-blue-600">Danial</span>, a
                curious problem-solver with a passion for building digital
                experiences that balance{" "}
                <span className="font-medium">functionality</span> and{" "}
                <span className="font-medium">creativity</span>. My journey in
                tech started with experimenting on small projects, and has grown
                into designing and developing applications that people actually
                use.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I’m currently pursuing a degree in{" "}
                <span className="font-semibold">Computer Science</span> with a
                focus on{" "}
                <span className="font-semibold">Leadership & Technology</span>.
                Along the way, I’ve explored full-stack development, cloud
                deployments, and design systems, constantly learning how
                technology can make life simpler and more efficient.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Outside of coding, I enjoy diving into{" "}
                <span className="italic">UI/UX trends</span>, brainstorming
                business ideas, and collaborating on projects that push me
                outside my comfort zone. My goal is to combine technical
                expertise with leadership to create solutions that are both
                innovative and impactful.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether it’s <span className="font-medium">building apps</span>,
                <span className="font-medium"> mentoring peers</span>, or{" "}
                <span className="font-medium">crafting strategies</span>, I love
                working at the intersection of{" "}
                <span className="text-blue-600">technology</span> and{" "}
                <span className="text-blue-600">people</span>.
              </p>
            </div>

            <div className="col-span-2 px-8 py-8">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
