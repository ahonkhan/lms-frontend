import React, { useContext, useEffect, useState } from "react";
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
import { addInitialModules } from "../../../../../redux/slice/courseModuleSlice";

const CourseModuleList = () => {
  const params = useParams();
  const courseID = params.slug;
  const modalContext = useContext(GetModalContext);
  const authContext = useContext(GetAuthContext);
  const dispatch = useDispatch();
  const [modules, setModules] = useState([]);
  const courseModule = useSelector((state) => state.courseModule);
  const { isLoading, data, isSuccess, isError } =
    courseModuleApiSlice.useFetchAllCourseModulesQuery(courseID);

  useEffect(() => {
    if (isSuccess && data?.modules) {
      const firstModule = courseModule?.modules;
      if (firstModule && firstModule[0]?.course !== courseID) {
        dispatch(addInitialModules(data.modules));
      }
    }
  }, [isSuccess, data, dispatch]);

  useEffect(() => {
    setModules(courseModule.modules.filter((item) => item.course === courseID));
  }, [courseModule.modules]);

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
          {modules.map((item, index) => (
            <ModuleCard
              enrolled={data?.enrolled}
              key={item?._id}
              item={item}
              serial={index + 1}
            />
          ))}
        </div>
      </div>
      <div className="mt-content"></div>
    </div>
  );
};

export default CourseModuleList;
