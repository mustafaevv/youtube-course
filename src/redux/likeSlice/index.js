import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('favorite') || '[]')

export const likeSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    likeItem: (state, action) => {
      if (state[action.payload.id]) delete state[action.payload.id]
      else state[action.payload.id] = action.payload
      localStorage.setItem('favorite', JSON.stringify(state))
    }
  }
})

export const { likeItem } = likeSlice.actions

export default likeSlice.reducer