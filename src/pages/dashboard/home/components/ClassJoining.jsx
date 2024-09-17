import React from "react";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";
import { ClassCard } from "../../../../components/card/ClassCard";

const ClassJoining = () => {
  return (
    <div className="mt-content">
      <SectionTitleDashboard>Class Joining</SectionTitleDashboard>
      <div className="mt-content">
        <div className="class-joining-list mt-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />

         
        </div>
      </div>
    </div>
  );
};

export default ClassJoining;
