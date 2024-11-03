import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";

const userApiSlice = createApi({
  reducerPath: "api/user",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/user`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    editUser: builder.mutation({
      query: (formData) => ({
        url: "/edit",
        method: "put",
        body: formData,
      }),
    }),
  }),
});

export default userApiSlice;
