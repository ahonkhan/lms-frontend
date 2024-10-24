import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "../api/authApiSlice";
import categoryApiSlice from "../api/categoryApiSlice";
import categoryReducer from "../slice/categorySlice";
import courseApiSlice from "../api/courseApiSlice";
import courseSlice from "../slice/courseSlice";

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [courseApiSlice.reducerPath]: courseApiSlice.reducer,
    [categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
    category: categoryReducer,
    course: courseSlice,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApiSlice.middleware,
      categoryApiSlice.middleware,
      courseApiSlice.middleware
    );
  },
});

export default store;
