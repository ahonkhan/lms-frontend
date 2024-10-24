import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";
import { addInitialCategory } from "../slice/categorySlice";

const categoryApiSlice = createApi({
  reducerPath: "api/category",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/admin`,
    prepareHeaders: (header) => {
      header.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
      header.set("Content-Type", "application/json");
    },
  }),

  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (category) => ({
        url: "/category",
        method: "post",
        body: { name: category },
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: "/category/" + id,
        method: "delete",
      }),
    }),
    fetchAllCategory: builder.query({
      query: () => "/category",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addInitialCategory(data.categories));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  }),
});

export default categoryApiSlice;
