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
    name: "filters",
    initialState,
    reducers: {
        setLocation(state, action) {
            state.location = action.payload;
        },
        setForm(state, action) {
            state.form = action.payload;
        },
        toggleFeature(state, action) {
            const feature = action.payload;
            state[feature] = !state[feature];
        },
        resetFilters() {
            return { ...initialState };
        },
    },
});

export const { setLocation, setForm, toggleFeature, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;