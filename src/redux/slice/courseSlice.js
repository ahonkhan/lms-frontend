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
      console.log(action.payload);
      if (
        state.lessons.length > 0 &&
        state.lessons[0].courseModule === action.payload[0].courseModule
      ) {
        return; // Lessons for this course are already present, no need to add
      } else {
        // Filter out new modules that don't match the existing courseId
        const newModulesLessons = action.payload.filter(
          (newModule) =>
            !state.lessons.some(
              (existingModule) =>
                existingModule.courseModule === newModule.courseModule
            )
        );

        state.lessons = [...state.lessons, ...newModulesLessons];
      }
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
