import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  factsCount: 3
};

const factSlice = createSlice({
  name: 'fact',
  initialState,
  reducers: {
    changeFactCount: (state, action) => {
      console.log(state, action);
      const count = +action.payload;
      return { factsCount: count }
    }
  }
});

export const { changeFactCount } = factSlice.actions;
export default factSlice.reducer;