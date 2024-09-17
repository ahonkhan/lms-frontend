import React from "react";
import { GiProgression } from "react-icons/gi";
import { RiGraduationCapLine } from "react-icons/ri";

const Overview = () => {
  return (
    <div className="overview-list grid grid-cols-2 lg:grid-cols-4  gap-x-5 gap-y-5">
      {[...Array(4)].map(item => (
        <div className="overview-card p-4 lg:p-5 cursor-pointer  bg-base-3 bg-opacity-70 rounded-lg text-white">
          <div className="content ">
            <div className="title text-gray-1">
              <h3 className="text-base 2xl:text-xl">Total Enrolled</h3>
            </div>
            <div className="count mt-2 xl:mt-3 2xl:mt-4">
              <p className="text-sm lg:text-lg 2xl:text-lg">09</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
