import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counter-slice.js"
import toasterSlice from "./toaster-slice.js"

 const store = configureStore({
  reducer: {
    counter: counterSlice,
    toaster: toasterSlice,
  },
})

export default store;