import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";
import { addInitialModules } from "../slice/courseModuleSlice";
import { addInitialCourseLesson } from "../slice/courseSlice";

const moduleLessonApiSlice = createApi({
  reducerPath: "api/courseModuleLesson",
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
    createCourseModuleLesson: builder.mutation({
      query: ({ name, description, module, video }) => ({
        url: "/admin/module-lesson",
        method: "post",
        body: {
          name: name,
          description: description,
          module: module,
          video: video,
        },
      }),
    }),
    fetchAllCourseModulesLessons: builder.query({
      query: (module) => "/user/get-all-module-lesson/" + module,
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     dispatch(addInitialCourseLesson([]));
      //     const { data } = await queryFulfilled;
      //     dispatch(addInitialCourseLesson(data.moduleLessons));
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // },
      // keepUnusedDataFor: 0,
    }),

    getSingleModuleLesson: builder.query({
      query: (lesson) => "/user/module-lesson/" + lesson,
      keepUnusedDataFor: 0,
    }),
    markAsCompleted: builder.mutation({
      query: (lesson) => ({
        url: "/user/mark-as-completed/" + lesson,
        method: "post",
      }),
    }),
  }),
});

export default moduleLessonApiSlice;
