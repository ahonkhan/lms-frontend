import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";
import { addInitialCourse } from "../slice/courseSlice";

const courseApiSlice = createApi({
  reducerPath: "api/course",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (formData) => ({
        url: "/admin/course",
        method: "post",
        body: formData,
      }),
    }),
    fetchAllCourse: builder.query({
      query: () => "/public/course",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addInitialCourse(data.courses));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: "/admin/course/" + id,
        method: "delete",
      }),
    }),
    fetchSingleCourse: builder.query({
      query: (id) => "/public/course/" + id,
    }),

    getAllCategoryWithCourse: builder.query({
      query: () => "/public/category",
    }),
    fetchAllCourseByCategory: builder.query({
      query: (category) =>
        category === "all"
          ? "/public/course"
          : "/public/course-by-category/" + category,
      keepUnusedDataFor: 0,
    }),
  }),
});

export default courseApiSlice;
