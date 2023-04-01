import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'Counter',
  initialState: {
    count: 1
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1
    },
    decrement: (state, action) => {
      state.count -= 1
    },
  }
})


export const counterActions = counterSlice.actions

export default counterSlice;
