import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdPlayCircleOutline } from "react-icons/md";
import { NavLink, useSearchParams } from "react-router-dom";

const ModuleItem = ({ item, serial }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query] = useSearchParams();
  useEffect(() => {
    if (query.get("module") === item?._id) {
      setIsOpen(true);
    }
  }, [query.toString()]);
  return (
    <div
      className={`module-item select-none ${
        query.get("module") === item._id
          ? "border-base-3 "
          : "hover:border-base-3 border-transparent"
      } border-primary   rounded-md duration-300 border  px-4 py-4  bg-base-3 bg-opacity-40`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="module-item-button cursor-pointer  "
      >
        <div className="header flex justify-between items-center gap-x-2">
          <h3>
            Module {serial} - {item?.name}
          </h3>
          <IoIosArrowDown />
        </div>
        <div className="footer mt-3">
          <p className="flex items-center gap-x-2">
            <MdPlayCircleOutline />
            <span className="text-sm">{item?.lessons.length} videos</span>
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="">
          {item?.lessons?.map((lesson, index) => (
            <NavLink
              key={lesson?._id}
              to={`/dashboard/classroom?course=${lesson?.course}&lesson=${lesson?._id}&module=${item?._id}`}
              className={`module-item-video  block border-l-4 border-transparent  px-4 py-4  bg-base-2 mt-2 rounded`}
            >
              <div className="video-item cursor-pointer flex justify-between items-center gap-x-4">
                <div className="flex items-start gap-x-2">
                  <div
                    className={`text-xl ${
                      query.get("lesson") === lesson?._id ? "text-primary" : ""
                    }`}
                  >
                    <MdPlayCircleOutline />
                  </div>
                  <div className="">
                    <p className="text-gray-1 text-sm">
                      {`${index + 1} )`} {lesson?.name}
                    </p>
                  </div>
                </div>
                <div className="text-xs shrink-0">{/* <p>2:50 Hour</p> */}</div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleItem;
