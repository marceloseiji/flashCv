import { configureStore } from '@reduxjs/toolkit'
import cvReducer from 'slices/cv'

const reducer = {
  cvReducer
}

const store = configureStore({ reducer })

export default store
export type RootState = ReturnType<typeof store.getState>
