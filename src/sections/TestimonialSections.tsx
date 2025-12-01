import { ShimmerText } from "@/components/ui/ShimmerText";
import { testimonialsData } from "@/constants/data";
import React from "react";

export type testimonialProps = {
  name: string;
  avatar: string;
  testimonial: string;
  designation: string;
};

export const TestimonialSections = () => {
  return (
    <>
      <div className=" line-b">
        <div className="max-w-5xl mx-auto line-x  ">
          <div className=" px-8 py-8  line-b">
            <ShimmerText text="Bat-Signal Reviews" spread="16px" />
          </div>

          <div className="grid md:grid-cols-2">
            {testimonialsData.map(
              ({ name, avatar, testimonial, designation }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl py-4 flex flex-col  line-r  justify-between h-[220px]"
                >
                  <p className="text-gray-600 italic   text-xl px-8 ">
                    &ldquo;{testimonial}&rdquo;
                  </p>

                  <div className="flex items-start gap-3 line-y py-1 px-8">
                    <img
                      src={avatar}
                      alt={name}
                      className="w-10 h-10 rounded-full object-cover "
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {name}
                      </h3>
                      <p className="text-sm text-gray-500">{designation}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
