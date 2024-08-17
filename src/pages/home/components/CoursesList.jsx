import React from "react";
import { SectionTitle } from "../../../components/typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
export const CoursesList = () => {
  return (
    <section id="teaching-process">
      <div className="site-container mt-section">
        <SectionTitle>আমাদের কোর্স সমুহঃ</SectionTitle>
        <div className="course-category mt-section">
          <div className="flex items-center gap-4">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
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
      </div>
    </section>
  );
};
