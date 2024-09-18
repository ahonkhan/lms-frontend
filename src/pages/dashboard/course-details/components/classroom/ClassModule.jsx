import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdPlayCircleOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ModuleItem from "./ModuleItem";

const ClassModule = () => {
  return (
    <div className="course-modules h-fit shrink-0 hidden xl:block rounded-md bg-opacity-50 bg-base-3 ">
      <div className=" bg-base-2 rounded-md flex flex-col justify-between bg-opacity-50 w-full xl:w-[360px] 2xl:w-[400px] h-[800px]">
        <div className="header shrink-0 px-4 flex items-center justify-between rounded-t-lg py-4 bg-primary bg-opacity-70">
          <h2 className="text-xl font-medium">Playlist</h2>
          <div className="controls">
            <button className="text-xl w-10 h-10 rounded-full bg-transparent flex items-center justify-center duration-300 active:scale-[0.98] hover:bg-primary bg-opacity-50 ">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
        <div className="course-module-list mt-2 h-full gap-y-2 flex flex-col overflow-y-auto">
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
          <ModuleItem />
        </div>
      </div>
    </div>
  );
};

export default ClassModule;
