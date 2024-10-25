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
  },
});

export const { addCourse, addInitialCourse } = courseSlice.actions;
export default courseSlice.reducer;
