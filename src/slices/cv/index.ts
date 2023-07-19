import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { BasicInfos, BasicInfosStatus, Stepper } from './types'
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
        field: action.payload.field,
        isCompleted:
          !!action.payload.name.text &&
          !!action.payload.age.text &&
          !!action.payload.role.text &&
          !!action.payload.city.text &&
          !!action.payload.state.text
      }
    },
    setActiveStep(state, action: PayloadAction<Stepper['activeStep']>) {
      state.stepper.activeStep = action.payload
    }
  }
})

export const { setBasicInfos, setActiveStep } = cvSlice.actions
export default cvSlice.reducer
