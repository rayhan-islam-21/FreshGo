import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './slices/uiSlice'
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
    reducer:{
        ui:uiReducer,
        theme:themeReducer
    }
})