import { createSlice } from "@reduxjs/toolkit";

const init = {
  mode: "dark",
  data: [],
};

const Myslice = createSlice({
  name: "MySlice",
  initialState: init,

  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});
export default Myslice.reducer;
export const { setMode } = Myslice.actions;
