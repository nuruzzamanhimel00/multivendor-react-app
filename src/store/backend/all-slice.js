import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  hasSidebar: true,
  
};

const allReducers = {
  toggleSidebar(state) {
    // console.log('toggleSidebar')
     state.hasSidebar = !state.hasSidebar
  },
  
};
const allSlice = createSlice({
  name: "all",
  initialState: initialState,
  reducers: allReducers,
});

export const {toggleSidebar} = allSlice.actions;
export default allSlice.reducer;
