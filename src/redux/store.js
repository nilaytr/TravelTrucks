import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../redux/favourites/favouritesSlice";
//import trucksReducer from "../redux/trucks/trucksSlice";
import filtersReducer from "../redux/filters/filtersSlice";

export const store = configureStore({
    reducer: {
        favourites: favouritesReducer,
        //trucks: trucksReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
