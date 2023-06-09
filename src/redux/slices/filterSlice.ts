import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../interfaces';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = (state: IState) => state.filter;
