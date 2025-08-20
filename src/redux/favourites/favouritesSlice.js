import { createSlice } from "@reduxjs/toolkit";

const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: savedFavourites,
    },
    reducers: {
        addFavourite(state, action) {
            const existFavourite = state.items.find((favourite) => favourite.id === action.payload.id);

            if (existFavourite) {
                state.items = state.items.filter((favourite) => favourite.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem('favourites', JSON.stringify(state.items));
        },
        removeFavourite(state) {
            state.items = [];
            localStorage.removeItem('favourites');
        },
    },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;