import React from "react";
import { SectionTitleDashboard } from "../../../../../components/typography/Typography";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineAssignmentLate } from "react-icons/md";
import ModuleCard from "../../../../../components/card/ModuleCard";
import { ButtonPrimary } from "../../../../../components/button/Button";

const CourseModuleList = () => {
  return (
    <div className="mt-content">
      <div className="flex items-center justify-between">
        <SectionTitleDashboard>Course modules</SectionTitleDashboard>
        <ButtonPrimary>Add new module</ButtonPrimary>
      </div>
      <div className="mt-content">
        <div className="module-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
          {[...Array(68)].map((item) => (
            <ModuleCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseModuleList;
