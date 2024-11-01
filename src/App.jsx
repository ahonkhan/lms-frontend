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
import ModalWrapper from "./layout/ModalWrapper";
import AdminLayout from "./layout/AdminLayout";
import { LoaderPageFull } from "./components/loader/Loader";
import ModuleLessonsPage from "./pages/dashboard/module-lessons/ModuleLessonsPage";
import EnrollProcessPage from "./pages/enroll/enroll-process/EnrollProcessPage";
import GlobalSidebar from "./components/sidebar/GlobalSidebar";
import ClassModuleLoader from "./components/dashboard/sidebar/ClassModuleLoader";

function App() {
  const rootContext = useContext(GetRootContext);
  const authContext = useContext(GetAuthContext);
  if (authContext.isLoading) {
    return <LoaderPageFull />;
  }

  return (
    <>
      <Toaster />
      <GlobalSidebar />
      <ModalWrapper />
      <div
        className={`course-modules ${
          rootContext?.moduleOpen ? "translate-y-0" : "translate-y-full"
        } duration-500 xl:hidden z-[400] fixed top-0 left-0 h-full shrink-0 w-full rounded-md  bg-base-3`}
      >
        <ClassModuleLoader />
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

          <Route
            path="/enroll/process"
            element={
              <AuthWrapper>
                <EnrollProcessPage />
              </AuthWrapper>
            }
          />
          <Route path="/enroll/cancel" element={<>cancel page</>} />
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
          <Route
            path="/dashboard/category"
            element={
              <AdminLayout>
                <CategoryPage />
              </AdminLayout>
            }
          />
          <Route
            path="/dashboard/courses/:course/:module"
            element={
              // <AdminLayout>
              <ModuleLessonsPage />
              // </AdminLayout>
            }
          />
          <Route path="/dashboard/users" element={<>users</>} />
          <Route path="/dashboard/transactions" element={<MyOrdersPage />} />
          <Route
            path="/dashboard/courses/:slug"
            element={<DashboardCoursesDetails />}
          />
          <Route path="/dashboard/classroom" element={<ClassRoom />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
