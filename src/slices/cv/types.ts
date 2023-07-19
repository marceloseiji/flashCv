type BasicInfos = {
  name: string
  age: string
}

type Stepper = {
  activeStep: number
}

type InitialStateProps = {
  stepBasicInfos: BasicInfos
  stepper: Stepper
}

export type { BasicInfos, InitialStateProps, Stepper }
