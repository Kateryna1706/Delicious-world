import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], error: null, isLoading: false };

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
});

export const recipesReducer = recipesSlice.reducer;
