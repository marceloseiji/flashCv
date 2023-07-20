type BasicInfos = {
  name: TextValidate
  role: TextValidate
  age: TextValidate
  city: TextValidate
  state: TextValidate
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

type TextValidate = {
  text: string
  hasError: boolean
}

type Presentation = {
  aboutMe: TextValidate
  professionalObjective: TextValidate
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
  TextValidate
}

export { BasicInfosFields }
