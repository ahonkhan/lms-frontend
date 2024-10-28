import React, { useContext } from "react";
import { SectionTitleDashboard } from "../../../../../components/typography/Typography";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineAssignmentLate } from "react-icons/md";
import ModuleCard from "../../../../../components/card/ModuleCard";
import { ButtonPrimary } from "../../../../../components/button/Button";
import { useParams } from "react-router-dom";
import { GetModalContext } from "../../../../../contexts/ModalContext";
import courseModuleApiSlice from "../../../../../redux/api/courseModuleApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetAuthContext } from "../../../../../contexts/AuthContext";

const CourseModuleList = () => {
  const params = useParams();
  const courseID = params.slug;
  const modalContext = useContext(GetModalContext);
  const authContext = useContext(GetAuthContext);
  const { isLoading } =
    courseModuleApiSlice.useFetchAllCourseModulesQuery(courseID);
  const courseModule = useSelector((state) => state.courseModule);
  if (isLoading) {
    return <>Loading course modules</>;
  }
  return (
    <div className="mt-content">
      <div className="flex items-center justify-between">
        <SectionTitleDashboard>Course modules</SectionTitleDashboard>
        {authContext.user?.role !== "customer" && (
          <div className="">
            <ButtonPrimary
              onClick={() => {
                modalContext.setCreateModuleModal(true);
                modalContext.setModuleCreateHelperID(courseID);
              }}
            >
              Add new module
            </ButtonPrimary>
          </div>
        )}
      </div>
      <div className="mt-content">
        <div className="module-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
          {courseModule.modules.map((item, index) => (
            <ModuleCard key={item?._id} item={item} serial={index + 1} />
          ))}
        </div>
      </div>
      <div className="mt-content"></div>
    </div>
  );
};

export default CourseModuleList;
