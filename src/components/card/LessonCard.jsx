import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline, MdPlayCircleOutline } from "react-icons/md";

export const LessonCard = () => {
  return (
    <div className="video-item bg-base-3 select-none py-8 px-4 rounded-lg cursor-pointer flex justify-between items-center gap-x-4">
      <div className="">
        <div className="flex items-start gap-x-2">
          <div className="text-xl">
            <MdPlayCircleOutline />
          </div>
          <div className="">
            <p className="text-gray-1 text-sm">
              1) JavaScript Object & JSON, Arrays and Array Methods, Strings and
            </p>
          </div>
        </div>
        {/* <div className="text-xs pl-6 mt-2">
          <p>2:50 Hour</p>
        </div> */}
      </div>

      <div className="flex text-xl items-center gap-x-4 shrink-0">
        <button className="active:scale-95 duration-150">
          <LiaEditSolid />
        </button>
        <div className="text-primary active:scale-95 duration-150  ">
          <MdDeleteOutline />
        </div>
      </div>
    </div>
  );
};
