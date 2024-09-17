import React from "react";
import { GiProgression } from "react-icons/gi";
import { RiGraduationCapLine } from "react-icons/ri";

const Overview = () => {
  return (
    <div className="overview-list grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
      {[...Array(4)].map(item => (
        <div className="overview-card p-4 lg:p-5 cursor-pointer  bg-base-3 bg-opacity-70 rounded-lg text-white">
          <div className="content ">
            <div className="title text-gray-1">
              <h3 className="text-xl lg:text-2xl">Total Enrolled</h3>
            </div>
            <div className="count mt-2 xl:mt-3 2xl:mt-4">
              <p className="text-base lg:text-lg 2xl:text-xl">09</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
