import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingLayout from "./layout/LandingLayout";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<></>} />
          <Route path="/courses" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
