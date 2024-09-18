import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineAssignmentLate } from "react-icons/md";
import { Link } from "react-router-dom";

const ModuleCard = () => {
  return (
    <div className="module-card cursor-pointer border border-base-3 border-opacity-50 hover:border-primary duration-200 bg-base-2 p-5 rounded">
      <div className="module-card-header pb-4 border-b border-b-base-3 border-opacity-30 flex justify-between items-center">
        <div className="flex items-center gap-x-2 bg-base-3 px-4 py-1 rounded">
          <p>Module</p>
          <p>1</p>
        </div>
        <div className="border border-primary rounded-full text-xs px-2 py-0.5 text-primary">
          <p>Ongoing</p>
        </div>
      </div>
      <div className="module-card-content mt-4">
        <h3 className="text-xl">Learn HTML perfectly</h3>
      </div>
      <div className="module-card-footer flex justify-between mt-5">
        <div className="flex items-center gap-x-2">
          <div className="icon text-xl">
            <IoPlayCircleOutline />
          </div>
          <p>51 Videos</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="icon text-xl">
            <MdOutlineAssignmentLate />
          </div>
          <p>1 Assignment</p>
        </div>
      </div>
      <div className="module-card-action mt-4">
        <Link
          to={
            "/dashboard/courses/frontend-web-dev-batch-5/classroom?module=2&lesson=1"
          }
          className="bg-primary  active:scale-[0.98] duration-150 group gap-x-2 px-16 w-full rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
        >
          Go to classroom
        </Link>
      </div>
    </div>
  );
};

export default ModuleCard;
