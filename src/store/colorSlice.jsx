import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "#FFFFFF",
};

const colorSlice = createSlice({
  name: "colorSlice",
  initialState,
  reducers: {
    setBackgroungColor: (state, action) => {
      console.log(action.payload);
      state.bgColor = action.payload;
    },
  },
});

export const { setBackgroungColor } = colorSlice.actions;

export default colorSlice.reducer;
