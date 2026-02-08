const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    mode :"dark"
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme : (state,actions)=>{
            state.mode = actions.payload
        },
        toggleTheme : (state)=>{
            state.mode = state.mode === "dark" ? "light" : "dark"
        }
    }
})

export const {toggleTheme,setTheme} = themeSlice.actions;
export default themeSlice.reducer;