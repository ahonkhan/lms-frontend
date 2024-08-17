import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const CourseCategory = () => {
  const swiperRef = useRef();
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
        <div className="prev absolute top-[50%] z-[200] -translate-y-[50%] right-0">
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
          slidesPerView={2}
          spaceBetween={10}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {[...Array(8)].map((item) => (
            <SwiperSlide>
              <div className="category-item text-center rounded-md bg-base-2 transition-all duration-300 hover:bg-base-3 select-none cursor-pointer py-4 px-4">
                <p>Web development</p>
                <p className="text-sm text-primary">12 Courses</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
