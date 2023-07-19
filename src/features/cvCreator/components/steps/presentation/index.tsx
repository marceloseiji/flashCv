import { Box, TextField } from '@mui/material'

const Presentation = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 }
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            label="Sobre você"
            multiline
            rows={4}
            defaultValue="Descreva algo legal sobre você profissionalmente"
            sx={{ flex: 1 }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            label="Objectivo"
            multiline
            rows={4}
            defaultValue="Escreva seu objetivo profissional"
            sx={{ flex: 1 }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Presentation
