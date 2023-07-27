import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { BasicInfos, Stepper } from './types'
import { initialState } from './initialState'

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setBasicInfos(state, action: PayloadAction<BasicInfos>) {
      const updatedField = action.payload.field
      const isCompleted =
        !!action.payload.name.text &&
        !!action.payload.age.text &&
        !!action.payload.role.text &&
        !!action.payload.city.text &&
        !!action.payload.state.text

      state.stepBasicInfos = {
        ...state.stepBasicInfos,
        [updatedField]: {
          text: action.payload[updatedField].text,
          hasError: action.payload[updatedField].hasError
        },
        field: updatedField,
        isCompleted
      }
    },
    setActiveStep(state, action: PayloadAction<Stepper['activeStep']>) {
      state.stepper.activeStep = action.payload
    }
  }
})

export const { setBasicInfos, setActiveStep } = cvSlice.actions
export default cvSlice.reducer
