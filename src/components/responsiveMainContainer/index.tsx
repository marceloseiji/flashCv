import { Container, useTheme, useMediaQuery } from '@mui/material'

type Props = {
  children: React.ReactElement
}

const ResponsiveMainContainer = (props: Props) => {
  const { children } = props
  const theme = useTheme()

  const smallerBreakPoint = theme.breakpoints.keys.filter(breakPoint =>
    useMediaQuery(theme.breakpoints.down(breakPoint))
  )[0]

  const isSmallScreen = smallerBreakPoint === 'sm'

  return (
    <Container
      maxWidth={smallerBreakPoint}
      sx={{
        height: `calc(100% - ${isSmallScreen ? '56px' : '64px'})`,
        marginTop: `${isSmallScreen ? '56px' : '64px'}`
      }}
    >
      {children}
    </Container>
  )
}

export default ResponsiveMainContainer
