import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "../api/authApiSlice";
import categoryApiSlice from "../api/categoryApiSlice";
import categoryReducer from "../slice/categorySlice";
import courseApiSlice from "../api/courseApiSlice";
import courseModuleApiSlice from "../api/courseModuleApiSlice";
import courseSlice from "../slice/courseSlice";
import courseModuleSlice from "../slice/courseModuleSlice";
import moduleLessonApiSlice from "../api/moduleLessonApiSlice";

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [courseApiSlice.reducerPath]: courseApiSlice.reducer,
    [categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
    [courseModuleApiSlice.reducerPath]: courseModuleApiSlice.reducer,
    [moduleLessonApiSlice.reducerPath]: moduleLessonApiSlice.reducer,
    category: categoryReducer,
    course: courseSlice,
    courseModule: courseModuleSlice,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApiSlice.middleware,
      categoryApiSlice.middleware,
      courseApiSlice.middleware,
      courseModuleApiSlice.middleware,
      moduleLessonApiSlice.middleware
    );
  },
});

export default store;
