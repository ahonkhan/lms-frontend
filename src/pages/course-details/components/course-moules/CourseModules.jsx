import React from "react";
import { SectionTitle } from "../../../../components/typography/Typography";
import { FaRegHandPointRight } from "react-icons/fa6";

export const CourseModules = () => {
  return (
    <div className="mt-section site-container">
      <div className="">
        <SectionTitle>Course Curriculum</SectionTitle>
        <div className="module-wrapper mt-section sub-container ">
          <div className="bg-base-2 bg-opacity-20  py-4">
            <div className="overflow-y-auto max-h-[450px] px-4">
              <ul className="grid grid-cols-1 gap-y-4">
                {[...Array(15)].map((item, index) => (
                  <li className="cursor-pointer select-none ">
                    <div className="module-item flex items-center border border-transparent hover:border-primary duration-300 gap-x-2 bg-base-2 p-4 rounded">
                      <div className="icon  flex items-center justify-center w-6 h-6 rounded-sm">
                        <FaRegHandPointRight className="text-xl text-white" />
                      </div>
                      <p>
                        <span className="font-medium">Module {index + 1}:</span>{" "}
                        Welcome Video
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
