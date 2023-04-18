import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    getFilteredContacts(state, action) {
      state.value = action.payload;
    },
  },
});

export const { getFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;