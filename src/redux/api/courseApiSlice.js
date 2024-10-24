import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";

const courseApiSlice = createApi({
  reducerPath: "api/course",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/admin`,
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
        url: "/course",
        method: "post",
        body: formData,
      }),
    }),
    fetchAllCourse: builder.query({
      query: () => "/course",
    }),
  }),
});

export default courseApiSlice;
