import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveStep } from 'slices/cv'
import { RootState } from 'store'
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Container
} from '@mui/material'

const steps = ['Informações básicas']

const CvStepper = () => {
  const dispatch = useDispatch()
  const { activeStep } = useSelector(
    (state: RootState) => state.cvReducer.stepper
  )
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean
  }>({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    dispatch(setActiveStep(newActiveStep))
  }

  const handleBack = () => {
    dispatch(setActiveStep(activeStep - 1))
  }

  const handleStep = (step: number) => () => {
    dispatch(setActiveStep(step))
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    dispatch(setActiveStep(0))
    setCompleted({})
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginTop: '16px'
      }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step
            key={label}
            completed={completed[index]}
            sx={{ paddingLeft: 0 }}
          >
            <StepButton
              color="inherit"
              onClick={handleStep(index)}
              sx={{ margin: 0, padding: 0 }}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {allStepsCompleted() ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flex: 1, marginTop: '16px' }}>
            Step {activeStep + 1}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2,
              marginBottom: '16px'
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: 'inline-block' }}>
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? 'Finish'
                    : 'Complete Step'}
                </Button>
              ))}
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default CvStepper
