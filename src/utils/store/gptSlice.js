import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    isSetGPT: false,
  },
  reducers: {
    toggleSetGPT: (state, action) => {
        state.isSetGPT = !state.isSetGPT;
    },
  },
});

export const { toggleSetGPT } = gptSlice.actions;
export default gptSlice.reducer