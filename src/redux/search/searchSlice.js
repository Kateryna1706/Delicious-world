const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  search: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

export const searchReducer = searchSlice.reducer;
