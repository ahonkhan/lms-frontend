import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { STORAGE_BASE_URL } from "../../config/config";
import { ButtonPrimary } from "../button/Button";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

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

export const RecentCourseCard = ({ item }) => {
  return (
    <div className="course-item cursor-pointer bg-base-3 shadow-lg rounded-md">
      <div className="relative group">
        <img src={`${item?.previewImage}`} alt="" className="rounded-md" />
        <div className="absolute opacity-0   group-hover:opacity-100 duration-100  w-full h-full z-[50] bg-black top-0 left-0 rounded-md bg-opacity-80">
          <div className="h-full p-4 w-fit">
            <div className="flex flex-col gap-4 items-center justify-center">
              <button className="text-white bg-base-3 w-8 h-8 text-lg rounded-full flex items-center justify-center">
                <AiOutlineDelete />
              </button>
              <button className="text-white bg-base-3 w-8 h-8 text-lg rounded-full flex items-center justify-center">
                <FiEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="course-desc px-4 py-4">
        <h2 className="text-xl text-white tracking-tight leading-6">
          {item?.name}
        </h2>
        <div className="flex items-center mt-4 gap-x-4">
          <div className="module">
            <p>{item?.courseModules?.length} modules</p>
          </div>
          <div className="added_by">
            <p className="bg-primary px-2 py-1 text-xs text-white rounded-full">
              {item?.addedBy?.fullName}
            </p>
          </div>
        </div>

        <Link
          to={"/dashboard/courses/frontend-web-development-react"}
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
