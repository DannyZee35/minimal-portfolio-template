import { achievements } from "@/constants/data";
import { BadgeCheck } from "lucide-react";
import React from "react";

export const Timeline = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8  ">Achievements</h2>
      <div className="relative flex flex-col gap-4">
        {achievements.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-4">
              <time className="flex items-center text-sm font-semibold rounded-md py-1 px-4 border border-gray-500 w-fit text-gray-800">
                {item.year}
              </time>

              {/* Title + Icon */}
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <BadgeCheck className="w-5 h-5 text-blue-500" />
                {item.title}
              </h3>

              <div className="mt-1 space-y-1">
                {item.description.map((line, j) => (
                  <p key={j} className="text-gray-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
