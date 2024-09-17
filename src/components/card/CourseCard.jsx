import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export const CourseCard = () => {
  return (
    <div className="course-item cursor-pointer bg-base-3 shadow-lg rounded-md">
      <img
        src="https://dream-software.vercel.app/_next/static/media/frontend-hero.af921956.png"
        alt=""
        className="rounded-md"
      />

      <div className="course-desc px-4 py-4">
        <div className="module">
          <p>158 modules</p>
        </div>
        <h2 className="text-xl text-white tracking-tight leading-6">
          Frontend Web development with react js
        </h2>

        <Link
          to={"/courses/frontend-web-development-react"}
          className="item-footer mt-4 block"
        >
          <button className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 w-full rounded-lg font-medium text-white text-center flex items-center justify-center py-2">
            Details
            <span className="text-xl group-hover:translate-x-1 duration-300">
              <GrFormNextLink />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export const RecentCourseCard = () => {
  return (
    <div className="course-card cursor-pointer flex items-center  gap-x-4 px-4 py-4 rounded-lg bg-base-2">
      <div className="course-photo w-[40%]">
        <img
          src="https://dream-software.vercel.app/_next/static/media/frontend-hero.af921956.png"
          alt=""
          className="rounded"
        />
      </div>
      <div className="course-details  w-[60%]">
        <h3 className="title text-base xl:text-lg leading-6">
          Frontend Web development with react js
        </h3>
        <div className="progress-area mt-2 md:mt-3 lg:mt-4 flex items-center gap-x-4">
          <div className="progress w-full">
            <div className="w-full bg-primary bg-opacity-20 rounded-full h-2.5 ">
              <div className="bg-primary w-[45%] h-2.5 rounded-full"></div>
            </div>
          </div>
          <div className="module-total hidden  lg:block shrink-0">
            <p className="text-sm">85/276 Modules</p>
          </div>
        </div>
      </div>
    </div>
  );
};
