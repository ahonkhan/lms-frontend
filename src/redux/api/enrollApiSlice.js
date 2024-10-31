import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";

const enrollApiSlice = createApi({
  reducerPath: "api/enroll",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    enroll: builder.mutation({
      query: ({ course, successUrl, cancelUrl, paymentMethod }) => ({
        url: "/user/enroll",
        method: "post",
        body: {
          course: course,
          successUrl: successUrl,
          cancelUrl: cancelUrl,
          paymentMethod: paymentMethod,
        },
      }),
    }),
    verify: builder.query({
      query: (token) => "/user/enroll/verify/" + token,
    }),
  }),
});

export default enrollApiSlice;
