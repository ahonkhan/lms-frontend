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
