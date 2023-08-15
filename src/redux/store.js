import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { recipesReducer } from './recipes/recipesSlice';
import { searchReducer } from './search/searchSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    authorization: authReducer,
    search: searchReducer,
  },
});
