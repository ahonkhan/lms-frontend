import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses = [action.payload, ...state.courses];
    },
    addInitialCourse: (state, action) => {
      state.courses = action.payload;
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { addCourse, addInitialCourse, deleteCourse } =
  courseSlice.actions;
export default courseSlice.reducer;
