import { Grid } from 'antd'

export const getCurrentBreakpoint = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const breakpoint = Grid.useBreakpoint()
  const currentBP = [
    ...Object.entries(breakpoint).filter((screen) => !!screen[1]),
  ].pop()
  return currentBP ? currentBP[0] : 'md'
}
