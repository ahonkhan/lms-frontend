import React, { useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import courseApiSlice from "../../redux/api/courseApiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../redux/slice/courseSlice";

export const CourseCard = ({ item }) => {
  return (
    <div className="course-item flex flex-col cursor-pointer bg-base-3 shadow-lg rounded-md">
      <img src={item?.previewImage} alt="" className="rounded-md shrink-0" />

      <div className="course-desc flex flex-col justify-between h-full px-4 py-4">
        <div className="">
          <div className="module">
            <p>{item?.courseModules?.length || 0} modules</p>
          </div>
          <h2 className="text-xl text-white tracking-tight leading-6">
            {item?.name}
          </h2>
        </div>

        <Link to={"/courses/" + item?._id} className="item-footer mt-4 block">
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
  const [removeCourse, { data, isLoading, isSuccess, isError, error }] =
    courseApiSlice.useDeleteCourseMutation();
  const dispatch = useDispatch();
  const handleRemoveCourse = (id) => {
    removeCourse(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      dispatch(deleteCourse(data?.id));
    }
    if (isError) {
      if (error?.data?.message) {
        toast.error(error?.data?.message);
      }
    }
  }, [isSuccess, isError]);

  return (
    <div className="course-item cursor-pointer bg-base-3 shadow-lg rounded-md">
      <div className="relative group">
        <img src={`${item?.previewImage}`} alt="" className="rounded-md" />
        <div className="absolute opacity-0   group-hover:opacity-100 duration-100  w-full h-full z-[50] bg-black top-0 left-0 rounded-md bg-opacity-80">
          <div className="h-full p-4 w-fit">
            <div className="flex flex-col gap-4 items-center justify-center">
              <button
                onClick={() => handleRemoveCourse(item?.id)}
                className="text-white bg-base-3 w-8 h-8 text-lg rounded-full flex items-center justify-center"
              >
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
            <p>{item?.courseModules?.length || "0"} modules</p>
          </div>
          <div className="added_by">
            <p className="bg-primary px-2 py-1 text-xs text-white rounded-full">
              {item?.addedBy?.fullName || "You"}
            </p>
          </div>
        </div>

        <Link
          to={"/dashboard/courses/" + item?._id}
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

export const EnrolledCourseCard = ({ item }) => {
  return (
    <div className="course-item cursor-pointer bg-base-3 shadow-lg rounded-md">
      <div className="relative group">
        <img src={`${item?.previewImage}`} alt="" className="rounded-md" />
      </div>

      <div className="course-desc px-4 py-4">
        <h2 className="text-xl text-white tracking-tight leading-6">
          {item?.name} Batch {item?.batch}
        </h2>
        <div className="flex items-center mt-4 gap-x-4">
          <div className="module">
            <p>{item?.courseModules?.length || "0"} modules</p>
          </div>
        </div>

        <Link
          to={"/dashboard/courses/" + item?._id}
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
