import { AppBar, Toolbar, Typography } from '@mui/material'
import ResponsiveContainer from 'components/responsiveContainer'
import FlashCvIcon from 'assets/icons/flashCvLogo'

const AppHeader = () => {
  return (
    <AppBar>
      <ResponsiveContainer>
        <Toolbar
          sx={{
            padding: 0,
            '@media (min-width: 600px)': {
              padding: 0
            }
          }}
        >
          <FlashCvIcon size="small" />
        </Toolbar>
      </ResponsiveContainer>
    </AppBar>
  )
}

export default AppHeader
