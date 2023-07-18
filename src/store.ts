import { configureStore } from '@reduxjs/toolkit'
import cvSlice from 'slices/cv'

const reducer = {
  cvReduxcer: cvSlice.reducer
}

const store = configureStore({ reducer })

export default store
