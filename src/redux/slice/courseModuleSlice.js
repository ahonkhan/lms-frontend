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
      if (
        state.modules.length > 0 &&
        state.modules[0].course === action.payload[0].course
      ) {
        return; // Modules for this course are already present, no need to add
      } else {
        // Filter out new modules that don't match the existing courseId
        const newModules = action.payload.filter(
          (newModule) =>
            !state.modules.some(
              (existingModule) => existingModule.course === newModule.course
            )
        );

        state.modules = [...state.modules, ...newModules];
      }
    },
    addLessonToModule: (state, action) => {
      // console.log(action.payload);

      const index = state.modules.findIndex(
        (item) => item?._id === action.payload.courseModule
      );
      console.log(index);
      if (index !== -1) {
        // Ensure the index exists in state.modules
        state.modules[index] = {
          ...state.modules[index],
          lessons: [...(state.modules[index].lessons || []), action.payload],
        };
      } // state.modules.map((item) => {
      //   if (item?._id === action.payload.courseModule) {
      //     item.push(action.payload);
      //   }
      // });
    },
    // deleteCourse: (state, action) => {
    //   state.courses = state.courses.filter(
    //     (item) => item._id !== action.payload
    //   );
    // },
  },
});

export const { addCourseModule, addInitialModules, addLessonToModule } =
  courseModuleSlice.actions;
export default courseModuleSlice.reducer;
