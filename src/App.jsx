import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingLayout from "./layout/LandingLayout";
import HomePage from "./pages/home/HomePage";
import { CoursePage } from "./pages/courses/CoursePage";
import { CourseDetailsPage } from "./pages/course-details/CourseDetailsPage";
import { DashboardLayout } from "./layout/DashboardLayout";
import { DashboardHome } from "./pages/dashboard/home/DashboardHome";

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
          <Route path="/dashboard/courses" element={<>Courses</>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
