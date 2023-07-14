import { Container, useTheme, useMediaQuery } from '@mui/material'

type Props = {
  children: React.ReactElement
}

const ResponsiveContainer = (props: Props) => {
  const { children } = props
  const theme = useTheme()

  const smallerBreakPoint = theme.breakpoints.keys.filter(breakPoint =>
    useMediaQuery(theme.breakpoints.down(breakPoint))
  )[0]

  return <Container maxWidth={smallerBreakPoint}>{children}</Container>
}

export default ResponsiveContainer
