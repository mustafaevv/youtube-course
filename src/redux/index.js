import { configureStore } from '@reduxjs/toolkit'
import like from './likeSlice'

const store = configureStore({
  reducer: {
    like,
  }
})

export default store

//actions
//store
//reducer
//selector