import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BackButton } from "../../../../../components/button/Button";
import ClassModule from "./ClassModule";
import ClassVideo from "./ClassVideo";

const ClassRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="from-bottom">
      <div className="heading flex items-center gap-x-4">
        <BackButton />
        <div className="course-details">
          <h1 className="text-base xl:text-lg 2xl:text-xl font-medium text-gray-2">
            Frontend Web Development with TailwindCss batch 2
          </h1>
        </div>
      </div>

      <div className="course-play-area gap-y-4 mt-content  flex-col xl:flex-row flex gap-x-5 xl:gap-x-6 2xl:gap-x-10 justify-between">
        <ClassVideo />
        <div className="course-modules h-fit shrink-0 hidden xl:block rounded-md bg-opacity-50 bg-base-3">
          <ClassModule />
        </div>
      </div>
      <div className="mt-content"></div>
    </div>
  );
};

export default ClassRoom;
