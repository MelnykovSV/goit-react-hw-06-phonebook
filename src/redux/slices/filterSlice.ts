import { createSlice } from '@reduxjs/toolkit';
import { IState } from '../../interfaces';

export const getFilter = (state: IState) => state.filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
