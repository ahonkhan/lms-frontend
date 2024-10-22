import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingLayout from "./layout/LandingLayout";
import HomePage from "./pages/home/HomePage";
import { CoursePage } from "./pages/courses/CoursePage";
import { CourseDetailsPage } from "./pages/course-details/CourseDetailsPage";
import { DashboardLayout } from "./layout/DashboardLayout";
import { DashboardHome } from "./pages/dashboard/home/DashboardHome";
import DashboardCourses from "./pages/dashboard/courses/DashboardCourses";
import DashboardCoursesDetails from "./pages/dashboard/course-details/DashboardCoursesDetails";
import ClassRoom from "./pages/dashboard/course-details/components/classroom/ClassRoom";
import ClassModule from "./pages/dashboard/course-details/components/classroom/ClassModule";
import { useContext, useEffect, useState } from "react";
import { GetRootContext } from "./contexts/RootContext";
import Settings from "./pages/dashboard/settings/Settings";
import LoginPage from "./pages/auth/login-page/LoginPage";
import SignupPage from "./pages/auth/signup-page/SignupPage";
import SendResetLinkPage from "./pages/auth/send-reset-link/SendResetLinkPage";
import ResetPasswordPage from "./pages/auth/reset-password/ResetPasswordPage";
import MyOrdersPage from "./pages/dashboard/my-orders/MyOrdersPage";
import CategoryPage from "./pages/dashboard/category/CategoryPage";
import { Toaster } from "react-hot-toast";
import AuthLessWrapper from "./layout/AuthLessWrapper";
import AuthWrapper from "./layout/AuthWrapper";
import { GetAuthContext } from "./contexts/AuthContext";

function App() {
  const rootContext = useContext(GetRootContext);
  const authContext = useContext(GetAuthContext);
  if (authContext.isLoading) {
    return <>loading...</>;
  }
  return (
    <>
      <Toaster />
      <div
        className={`course-modules ${
          rootContext?.moduleOpen ? "translate-y-0" : "translate-y-full"
        } duration-500 xl:hidden z-[400] fixed top-0 left-0 h-full shrink-0 w-full rounded-md  bg-base-3`}
      >
        <ClassModule />
      </div>

      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<></>} />
          <Route
            path="/login"
            element={
              <AuthLessWrapper>
                <LoginPage />
              </AuthLessWrapper>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLessWrapper>
                <SignupPage />
              </AuthLessWrapper>
            }
          />
          <Route
            path="/reset-password"
            element={
              <AuthLessWrapper>
                <SendResetLinkPage />
              </AuthLessWrapper>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <AuthLessWrapper>
                <ResetPasswordPage />
              </AuthLessWrapper>
            }
          />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:slug" element={<CourseDetailsPage />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <AuthWrapper>
              <DashboardLayout />
            </AuthWrapper>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/courses" element={<DashboardCourses />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/category" element={<CategoryPage />} />
          <Route path="/dashboard/users" element={<>users</>} />
          <Route path="/dashboard/transactions" element={<MyOrdersPage />} />
          <Route
            path="/dashboard/courses/:slug"
            element={<DashboardCoursesDetails />}
          />
          <Route
            path="/dashboard/courses/:slug/classroom/:module"
            element={<ClassRoom />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
