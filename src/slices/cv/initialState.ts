import { InitialStateProps } from './types'

const initialState: InitialStateProps = {
  stepper: {
    activeStep: 0
  },
  stepBasicInfos: {
    name: '',
    age: ''
  }
}

export { initialState }
