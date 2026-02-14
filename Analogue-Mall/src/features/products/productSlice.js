import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  special: [
    { id: 1, name: "iPhone 12 Pro Max" },
    { id: 2, name: "iPhone 12 Pro Max" },
    { id: 3, name: "iPhone 12 Pro Max" },
  ],
  recent: [
    { id: 4, name: "iPhone 12 Pro Max" },
    { id: 5, name: "iPhone 12 Pro Max" },
    { id: 6, name: "iPhone 12 Pro Max" },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
