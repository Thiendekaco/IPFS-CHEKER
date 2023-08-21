import { keyframes } from "styled-components";


export const fadeUp = keyframes`
  from{ opacity:  0 }
  to{ opacity: 1 }


`

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const slideDown = keyframes`
    from{ position: relative; top: -20px; opacity:  0}
    to { position: relative; top: 0; opacity: 1}
`