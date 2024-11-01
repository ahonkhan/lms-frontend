import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import courseApiSlice from "../../../../redux/api/courseApiSlice";

export const CourseCategory = ({ setActiveCategory, activeCategory }) => {
  const swiperRef = useRef();
  const { data, isLoading } = courseApiSlice.useGetAllCategoryWithCourseQuery();

  if (isLoading) {
    return <>Loading..</>;
  }
  const allCourseCount = (category) => {
    let count = 0;
    category.map((item) => {
      count += item.courses.length;
    });
    return count;
  };
  return (
    <div className="course-category mt-section">
      <div className="flex items-center gap-4 relative">
        <div className="prev absolute top-[50%] z-[200] -translate-y-[50%] left-0">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center active:scale-[0.98] text-gray-900 text-xl"
          >
            <GrFormPrevious />
          </button>
        </div>
        <div className="prev absolute top-[50%] z-[100] -translate-y-[50%] right-0">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center active:scale-[0.98] text-gray-900 text-xl"
          >
            <GrFormNext />
          </button>
        </div>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={10}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: Math.min(data?.categories.length + 1, 2),
              spaceBetween: 20,
            },
            768: {
              slidesPerView: Math.min(data?.categories.length + 1, 4),
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: Math.min(data?.categories.length + 1, 4),
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: Math.min(data?.categories.length + 1, 4),
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div
              onClick={() => setActiveCategory("all")}
              className={`category-item ${
                activeCategory === "all" ? "bg-base-3" : "bg-base-2"
              } text-center rounded-md  transition-all duration-300 hover:bg-base-3 select-none cursor-pointer py-4 px-4`}
            >
              <p className="capitalize">All</p>
              <p className="text-sm text-primary">
                {allCourseCount(data.categories)} Courses
              </p>
            </div>
          </SwiperSlide>
          {data?.categories.map((item) => (
            <SwiperSlide key={item?._id}>
              <div
                onClick={() => setActiveCategory(item?._id)}
                className={`category-item text-center rounded-md ${
                  activeCategory === item?._id ? "bg-base-3" : "bg-base-2"
                } transition-all duration-300 hover:bg-base-3 select-none cursor-pointer py-4 px-4`}
              >
                <p className="capitalize">{item?.name}</p>
                <p className="text-sm text-primary">
                  {item?.courses.length || 0} Courses
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
