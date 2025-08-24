import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTrucksById } from "./trucksOperations";

const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        selectedTruck: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrucks.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.items = [];
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchTrucksById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.selectedTruck = null;
            })
            .addCase(fetchTrucksById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedTruck = action.payload;
            })
            .addCase(fetchTrucksById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default trucksSlice.reducer;