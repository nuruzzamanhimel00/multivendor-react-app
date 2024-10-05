import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  hasSidebar: true,
  isRequestSpinner: false
};

const allReducers = {
  toggleSidebar(state) {
    // console.log('toggleSidebar')
     state.hasSidebar = !state.hasSidebar
  },
  setRequestSpinner(state, action){
    state.isRequestSpinner = action.payload
  }
  
};
const allSlice = createSlice({
  name: "all",
  initialState: initialState,
  reducers: allReducers,
});

export const {toggleSidebar, setRequestSpinner} = allSlice.actions;
export default allSlice.reducer;
