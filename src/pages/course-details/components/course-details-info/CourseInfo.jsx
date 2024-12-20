import React, { useContext } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GetAuthContext } from "../../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import EnrollCourse from "./EnrollCourse";
const GetButton = ({ course, enrolled }) => {
  const authContext = useContext(GetAuthContext);
  if (authContext?.user && authContext?.user?.role !== "customer") {
    return (
      <Link
        to={"/dashboard/courses/" + course?._id}
        className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-16 rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
      >
        Manage
        <span className="text-xl group-hover:translate-x-1 duration-300">
          <GrFormNextLink />
        </span>
      </Link>
    );
  } else {
    if (authContext.user && enrolled) {
      return (
        <Link
          to={"/dashboard/courses/" + course?._id}
          className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-16 rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
        >
          Go to module
          <span className="text-xl group-hover:translate-x-1 duration-300">
            <GrFormNextLink />
          </span>
        </Link>
      );
    } else {
      return <EnrollCourse />;
    }
  }
};
export const CourseInfo = ({ course, lessonCount, enrolled, moduleCount }) => {
  const authContext = useContext(GetAuthContext);
  return (
    <div className="bg-base-2">
      <div className="site-container py-section">
        <div className=" md:grid-cols-2 gap-y-8 flex md:grid flex-col-reverse gap-x-10 sub-container">
          <div className="left-details">
            <h1 className="text-2xl font-medium text-white">
              {course?.name} Batch {course?.batch}
            </h1>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: course?.description }}
            ></p>

            <div className="purchase mt-8 flex items-center gap-x-4">
              <GetButton course={course} enrolled={enrolled} />
              <p className="text-lg">৳ {course?.price}</p>
            </div>
            <div className="more-info text-sm md:text-base mt-8 flex items-center gap-4">
              <p className="px-4 py-2 bg-base-3 rounded-sm text-white">
                {lessonCount} lessons
              </p>
              {/* <p className="px-4 py-2 bg-base-3 rounded-sm text-white">
                650+ prerecorded videos
              </p> */}
              <p className="px-4 py-2 bg-base-3 rounded-sm text-white">
                {moduleCount} modules
              </p>
            </div>
            {authContext?.user?.role === "customer" && !enrolled && (
              <div className="mt-4">
                <h1 className="bg-base-3 text-xl py-2 px-2 w-fit rounded border-b-2 border-primary">
                  Enroll before: {course?.startDate}
                </h1>
              </div>
            )}
          </div>
          <div className="right-image">
            <img src={course?.previewImage} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
