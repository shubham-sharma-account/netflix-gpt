import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      if (state.length > 0) state.pop();
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      state.pop();
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
