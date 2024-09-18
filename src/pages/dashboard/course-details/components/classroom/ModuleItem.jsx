import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdPlayCircleOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ModuleItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="module-item select-none hover:border-base-3 rounded-md duration-300 border border-transparent px-4 py-4  bg-base-3 bg-opacity-40">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="module-item-button cursor-pointer "
      >
        <div className="header flex justify-between items-center gap-x-2">
          <h3>Module 1 - Become a hero of HTML and CSS</h3>
          <IoIosArrowDown />
        </div>
        <div className="footer mt-3">
          <p className="flex items-center gap-x-2">
            <MdPlayCircleOutline />
            <span className="text-sm">30 videos</span>
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="">
          <NavLink
            to={"/dashboard/courses/frontend-web-dev-batch-5/classroom/vm1lL2"}
            className="module-item-video block border-l-4 border-transparent  px-4 py-4  bg-base-2 mt-2 rounded"
          >
            <div className="video-item cursor-pointer flex justify-between items-center gap-x-4">
              <div className="flex items-start gap-x-2">
                <div className="text-xl">
                  <MdPlayCircleOutline />
                </div>
                <div className="">
                  <p className="text-gray-1 text-sm">
                    1) JavaScript Object & JSON, Arrays and Array Methods,
                    Strings and
                  </p>
                </div>
              </div>
              <div className="text-xs shrink-0">
                <p>2:50 Hour</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to={"/dashboard/courses/frontend-web-dev-batch-5/classroom/vm1lL8"}
            className="module-item-video block border-l-4 border-transparent  px-4 py-4  bg-base-2 mt-2 rounded"
          >
            <div className="video-item cursor-pointer flex justify-between items-center gap-x-4">
              <div className="flex items-start gap-x-2">
                <div className="text-xl">
                  <MdPlayCircleOutline />
                </div>
                <div className="">
                  <p className="text-gray-1 text-sm">
                    1) JavaScript Object & JSON, Arrays and Array Methods,
                    Strings and
                  </p>
                </div>
              </div>
              <div className="text-xs shrink-0">
                <p>2:50 Hour</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to={"/dashboard/courses/frontend-web-dev-batch-5/classroom/vm1lLk8"}
            className="module-item-video block border-l-4 border-transparent  px-4 py-4  bg-base-2 mt-2 rounded"
          >
            <div className="video-item cursor-pointer flex justify-between items-center gap-x-4">
              <div className="flex items-start gap-x-2">
                <div className="text-xl">
                  <MdPlayCircleOutline />
                </div>
                <div className="">
                  <p className="text-gray-1 text-sm">
                    1) JavaScript Object & JSON, Arrays and Array Methods,
                    Strings and
                  </p>
                </div>
              </div>
              <div className="text-xs shrink-0">
                <p>2:50 Hour</p>
              </div>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ModuleItem;
