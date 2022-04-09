/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components'
import { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  greaterThan?: breakpoint
  lessThan?: breakpoint
}

export default styled.div<MediaMatchProps>`
  /* ${({ lessThan, greaterThan }) => css`
    display: none;
  `} */
`
