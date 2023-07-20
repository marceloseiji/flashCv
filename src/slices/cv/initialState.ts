import { InitialStateProps, BasicInfosFields } from './types'

const initialState: InitialStateProps = {
  stepper: {
    activeStep: 0
  },
  stepBasicInfos: {
    field: BasicInfosFields.name,
    isCompleted: false,
    name: {
      text: '',
      hasError: false
    },
    role: {
      text: '',
      hasError: false
    },
    age: {
      text: '',
      hasError: false
    },
    city: {
      text: '',
      hasError: false
    },
    state: {
      text: '',
      hasError: false
    }
  },
  presentation: {
    aboutMe: {
      text: '',
      hasError: false
    },
    professionalObjective: {
      text: '',
      hasError: false
    }
  }
}

export { initialState }
