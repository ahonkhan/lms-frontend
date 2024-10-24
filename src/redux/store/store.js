import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "../api/authApiSlice";
import categoryApiSlice from "../api/categoryApiSlice";
import categoryReducer from "../slice/categorySlice";

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
    category: categoryReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApiSlice.middleware,
      categoryApiSlice.middleware
    );
  },
});

export default store;
