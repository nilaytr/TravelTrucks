import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchTrucks = createAsyncThunk('catalog/fetchAll', async (filters = {}, thunkAPI) => {
    try {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await axios.get(`/?${queryParams}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchTrucksById = createAsyncThunk('catalog/fetchById', async (id, thunkAPI) => {
    try {
        const response = await axios.get(`/${id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});