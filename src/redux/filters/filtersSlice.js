import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: '',
    transmission: '',
    price: '',
    rating: '',
    engine: '',
    form: '',
    AC: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilters(state, action) {
            return { ...state, ...action.payload }
        },
        resetFilters() {
            return { ...initialState }
        },
    },
});

export const { updateFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;