import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { BasicInfos, Stepper } from './types'
import { initialState } from './initialState'

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setBasicInfos(state, action: PayloadAction<BasicInfos>) {
      state.stepBasicInfos = {
        ...state.stepBasicInfos,
        [action.payload.field]: {
          text: action.payload[action.payload.field].text,
          hasError: action.payload[action.payload.field].hasError
        },
        field: action.payload.field
      }
    },
    setActiveStep(state, action: PayloadAction<Stepper['activeStep']>) {
      state.stepper.activeStep = action.payload
    }
  }
})

export const { setBasicInfos, setActiveStep } = cvSlice.actions
export default cvSlice.reducer
