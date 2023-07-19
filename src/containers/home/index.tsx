import { Typography } from '@mui/material'
import CvCreator from 'features/cvCreator'

const Home = () => (
  <>
    <Typography variant="h6" gutterBottom sx={{ marginTop: '16px' }}>
      Crie seu currículo online
    </Typography>
    <CvCreator />
  </>
)

export default Home
