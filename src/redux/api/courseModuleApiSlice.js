import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";
import { addInitialModules } from "../slice/courseModuleSlice";

const courseModuleApiSlice = createApi({
  reducerPath: "api/courseModule",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createCourseModule: builder.mutation({
      query: ({ name, description, course, startDate, endDate }) => ({
        url: "/admin/course-module",
        method: "post",
        body: {
          name: name,
          description: description,
          course: course,
          startDate: startDate,
          endDate: endDate,
        },
      }),
    }),
    fetchAllCourseModules: builder.query({
      query: (course) => "/user/course-module?course=" + course,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          dispatch(addInitialModules([]));
          const { data } = await queryFulfilled;
          dispatch(addInitialModules(data.modules));
        } catch (error) {
          console.log(error.message);
        }
      },
      keepUnusedDataFor: 0,
    }),
    fetchCourseModulesWithLessons: builder.query({
      query: (course) => "/user/course/" + course,
      keepUnusedDataFor: 0,
    }),
    
  }),
});

export default courseModuleApiSlice;