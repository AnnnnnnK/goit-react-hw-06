import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
      console.log(state.filter);
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
