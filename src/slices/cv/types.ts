type BasicInfos = {
  name: BasicInfosStatus
  role: BasicInfosStatus
  age: BasicInfosStatus
  city: BasicInfosStatus
  state: BasicInfosStatus
  field: BasicInfosFields
  isCompleted: boolean
}

enum BasicInfosFields {
  name = 'name',
  role = 'role',
  age = 'age',
  city = 'city',
  state = 'state'
}

type BasicInfosStatus = {
  text: string
  hasError: boolean
}

type Presentation = {
  aboutMe: string
  professionalObjective: string
}

type Stepper = {
  activeStep: number
}

type InitialStateProps = {
  stepBasicInfos: BasicInfos
  stepper: Stepper
  presentation: Presentation
}

export type {
  BasicInfos,
  InitialStateProps,
  Stepper,
  Presentation,
  BasicInfosStatus
}

export { BasicInfosFields }
