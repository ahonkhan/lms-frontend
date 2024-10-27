import { createSlice } from "@reduxjs/toolkit";

const courseModuleSlice = createSlice({
  name: "courseModule",
  initialState: {
    modules: [],
  },
  reducers: {
    addCourseModule: (state, action) => {
      state.modules.push(action.payload);
    },
    addInitialModules: (state, action) => {
      state.modules = action.payload;
    },
    // deleteCourse: (state, action) => {
    //   state.courses = state.courses.filter(
    //     (item) => item._id !== action.payload
    //   );
    // },
  },
});

export const { addCourseModule, addInitialModules } = courseModuleSlice.actions;
export default courseModuleSlice.reducer;
