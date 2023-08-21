import  { styled } from "styled-components";
import { slideDown } from "../../styles/animation.styles";


export interface propsIsLoading {
    isLoading : boolean;
}




export const HostNameItemStyles = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
  height : 60px;
  margin-bottom: 10px;
  padding-left: 10px;
  border: 1px solid ${props => props.theme.borderColorCanAccess};
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundColorCollection};
  transition: opacity 0.2s ease-in-out;
  opacity: 0.9;
  animation: ${ slideDown } ease-in-out 1s;
  &:hover {
    opacity: 1;
  }
`
export const HostNameStyles = styled.h4`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  font-weight: 300;
  width: 40%;
  margin-top: 19px;
`

export const ImgCountryHost = styled.img`
  width: 25px;
  height: 25px;
  border: solid 0 transparent;
  border-radius: 40%;
  margin-top: 17px;
`
export const ImgCountryHostNotFound = styled.div`
  width: 25px;
  height: 25px;
  border: solid 0 transparent;
  border-radius: 30%;
  background-color: ${ props => props.theme.background_colorContent };
  margin-top: 17px;
`
export const MarginBox = styled.div`
    width: 50px;
`
