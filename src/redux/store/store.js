import { configureStore } from "@reduxjs/toolkit";
import listReducer from '../reducer/reducer'
export default configureStore({
    reducer: listReducer
})