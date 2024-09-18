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

function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<></>} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:slug" element={<CourseDetailsPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/courses" element={<DashboardCourses />} />
          <Route
            path="/dashboard/courses/:slug"
            element={<DashboardCoursesDetails />}
          />
          <Route
            path="/dashboard/courses/:slug/classroom"
            element={<ClassRoom />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
