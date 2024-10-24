import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories = [action.payload, ...state.categories];
    },
    addInitialCategory: (state, action) => {
      state.categories = action.payload;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { addCategory, addInitialCategory, deleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
