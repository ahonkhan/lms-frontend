import { createSlice } from "@reduxjs/toolkit";

const courseModuleSlice = createSlice({
  name: "courseModule",
  initialState: {
    modules: [],
    playlist: [],
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
    addInitialPlaylist: (state, action) => {
      state.playlist = action.payload;
    },

    updateLessonProgress: (state, action) => {
      const lesson = action.payload.lesson;
      const status = action.payload.status;
      const courseModule = lesson?.courseModule;

      // Find the module and lesson
      const updatedPlaylist = state.playlist.map((module) => {
        if (module._id === courseModule) {
          const updatedLessons = module.lessons.map((item) => {
            if (item._id === lesson._id) {
              // Update the lesson progress status
              return {
                ...item,
                lessonProgress: {
                  ...item.lessonProgress,
                  status: status,
                },
              };
            }
            return item; // return the lesson as is if not the target
          });

          return {
            ...module,
            lessons: updatedLessons,
          };
        }
        return module; // return the module as is if not the target
      });

      // Set the new playlist
      state.playlist = updatedPlaylist;
    },
  },
});

export const {
  addCourseModule,
  addInitialModules,
  addLessonToModule,
  addInitialPlaylist,
  updateLessonProgress,
} = courseModuleSlice.actions;
export default courseModuleSlice.reducer;
