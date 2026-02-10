import { api } from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPopularProducts = createAsyncThunk('popularProducts/fetchPopularProducts',
    async () => {
        const response = await api.get("/products")
        return response.data;
    }
)

const popularProductSlice = createSlice({
    name: "popularProducts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopularProducts.pending, (state) => {
            state.loading = true,
                state.error = null
        })
            .addCase(fetchPopularProducts.fulfilled, (state, action) => {
                state.loading = false,
                    state.items = action.payload
            })
            .addCase(fetchPopularProducts.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
    }
})


export default popularProductSlice.reducer;
