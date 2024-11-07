import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/config";

const authApiSlice = createApi({
  reducerPath: "api/auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/auth`,
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
    sendSignupOtp: builder.mutation({
      query: (email) => ({
        url: "/signup-otp",
        method: "post",
        body: { email: email },
      }),
    }),
    signup: builder.mutation({
      query: ({ email, password, verificationCode, fullName }) => ({
        url: "/signup",
        method: "post",
        body: {
          fullName: fullName,
          email: email,
          verificationCode: verificationCode,
          password: password,
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "post",
        body: {
          email: email,
          password: password,
        },
      }),
    }),
    sendResetPasswordLink: builder.mutation({
      query: ({ email, base_url }) => ({
        url: "/password-reset-link",
        method: "post",
        body: { email: email, base_url: base_url },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, newPassword, retypePassword }) => ({
        url: "/password-reset",
        method: "post",
        body: {
          token: token,
          newPassword: newPassword,
          retypePassword: retypePassword,
        },
      }),
    }),

    getAuthInfo: builder.query({
      query: () => "/info",
    }),
  }),
});

export default authApiSlice;
