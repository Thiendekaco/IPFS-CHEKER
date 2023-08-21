import { styled, keyframes } from "styled-components";
import { spin } from "../../styles/animation.styles";

export const SpinnerOverLay = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 2.5px solid rgba(116, 116, 116, 0.56);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: ${ spin } 1s ease-in-out infinite;

`

