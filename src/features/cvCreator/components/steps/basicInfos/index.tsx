import { Box, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { setBasicInfos } from 'slices/cv'
import { BasicInfosFields } from 'slices/cv/types'

const BasicInfos = () => {
  const dispatch = useDispatch()
  const { stepBasicInfos } = useSelector((state: RootState) => state.cvReducer)

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <TextField
          error={stepBasicInfos.name.hasError}
          label="Nome completo"
          sx={{ flex: 3 }}
          value={stepBasicInfos.name.text}
          onChange={event =>
            dispatch(
              setBasicInfos({
                ...stepBasicInfos,
                ...stepBasicInfos.name,
                name: {
                  text: event.target.value,
                  hasError: event.target.value.length === 0
                },
                field: BasicInfosFields.name
              })
            )
          }
        />
        <TextField
          error={stepBasicInfos.age.hasError}
          label="Idade"
          sx={{ flex: 1 }}
          value={stepBasicInfos.age.text}
          onChange={event =>
            dispatch(
              setBasicInfos({
                ...stepBasicInfos,
                ...stepBasicInfos.age,
                age: {
                  text: event.target.value,
                  hasError: event.target.value.length === 0
                },
                field: BasicInfosFields.age
              })
            )
          }
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <TextField
          error={stepBasicInfos.role.hasError}
          label="Cargo"
          sx={{ flex: 1 }}
          value={stepBasicInfos.role.text}
          onChange={event =>
            dispatch(
              setBasicInfos({
                ...stepBasicInfos,
                ...stepBasicInfos.role,
                role: {
                  text: event.target.value,
                  hasError: event.target.value.length === 0
                },
                field: BasicInfosFields.role
              })
            )
          }
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <TextField
          error={stepBasicInfos.city.hasError}
          label="Cidade"
          sx={{ flex: 2 }}
          value={stepBasicInfos.city.text}
          onChange={event =>
            dispatch(
              setBasicInfos({
                ...stepBasicInfos,
                ...stepBasicInfos.city,
                city: {
                  text: event.target.value,
                  hasError: event.target.value.length === 0
                },
                field: BasicInfosFields.city
              })
            )
          }
        />
        <TextField
          error={stepBasicInfos.state.hasError}
          label="Estado"
          sx={{ flex: 2 }}
          value={stepBasicInfos.state.text}
          onChange={event =>
            dispatch(
              setBasicInfos({
                ...stepBasicInfos,
                ...stepBasicInfos.state,
                state: {
                  text: event.target.value,
                  hasError: event.target.value.length === 0
                },
                field: BasicInfosFields.state
              })
            )
          }
        />
      </Box>
    </Box>
  )
}

export default BasicInfos
