import { createSlice } from "@reduxjs/toolkit";
import {removeToken,setToken} from "../../helpers/AllHelpers.js";



const initialState = {
  user: {},
  token: null,
  isAuth: false,
};

const allReducers = {
  resetAuthData(state) {
    // console.log('resetAuthData')
    state.user = {};
    state.token = null;
    state.isAuth = false;
    removeToken();
  },
  setLoginData(state, action) {
    // console.log("setLoginData", action.payload);
    setToken(action.payload.token);
    state.isAuth = true;
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: allReducers,
});

export const {setLoginData, resetAuthData} = authSlice.actions;
export default authSlice.reducer;
