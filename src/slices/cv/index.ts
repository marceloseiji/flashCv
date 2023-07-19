import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BasicInfos } from './types'
import { initialState } from './initialState'

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setBasicInfos(state, action: PayloadAction<BasicInfos>) {
      state.stepBasicInfos = { ...state.stepBasicInfos, ...action.payload }
    }
  }
})

export const { setBasicInfos } = cvSlice.actions
export default cvSlice.reducer
