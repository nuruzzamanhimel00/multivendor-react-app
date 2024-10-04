import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counter-slice.js"
import toasterSlice from "./toaster-slice.js"
import authSlice from './backend/auth-slice.js'

//admin
import allSlice from './all-slice.js'

 const store = configureStore({
  reducer: {
    counter: counterSlice,
    toaster: toasterSlice,
    auth: authSlice,
    all: allSlice,
  },
})

export default store;