import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  hasSidebar: true,
  isRequestSpinner: false,
  breadCrumbData:{
    items: [{ label: 'Dashboard', url: '/admin/dashboard' }],
    home: { icon: 'pi pi-home', url: '/admin/dashboard' }
  }
};

const allReducers = {
  toggleSidebar(state) {
    // console.log('toggleSidebar')
     state.hasSidebar = !state.hasSidebar
  },
  setRequestSpinner(state, action){
    state.isRequestSpinner = action.payload
  },
  setBreadCrumbData(state, action){
    state.breadCrumbData = action.payload ? action.payload : initialState.breadCrumbData;
    // console.log('setBreadCrumbData', action.payload)
  }

  
};
const allSlice = createSlice({
  name: "all",
  initialState: initialState,
  reducers: allReducers,
});

export const {toggleSidebar, setRequestSpinner, setBreadCrumbData} = allSlice.actions;
export default allSlice.reducer;
