import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    lessons: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses = [action.payload, ...state.courses];
    },
    addCourseLessons: (state, action) => {
      state.lessons.push(action.payload);
    },
    addInitialCourse: (state, action) => {
      state.courses = action.payload;
    },
    addInitialCourseLesson: (state, action) => {
      state.lessons = action.payload;
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const {
  addCourse,
  addInitialCourse,
  deleteCourse,
  addCourseLessons,
  addInitialCourseLesson,
} = courseSlice.actions;
export default courseSlice.reducer;
