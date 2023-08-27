import  { styled } from "styled-components";
import { slideDown } from "../../styles/animation.styles";
import { Link } from "react-router-dom";


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
  flex-basis: 200px;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 19px 0 0 0 ;
`

export const ImgCountryHost = styled.img`
  width: 25px;
  height: 25px;
  border: solid 0 transparent;
  margin-left: 85%;
  border-radius: 40%;
  margin-top: 17px;
  
`
export const ImgCountryHostNotFound = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 85%;
  border: solid 0 transparent;
  border-radius: 30%;
  background-color: ${ props => props.theme.background_colorContent };
  margin-top: 17px;

`
export const MarginBox = styled.div`
    width: 50px;
    flex-basis: 50px;
    flex-shrink: 0;
`
export const CheckCordsStyle = styled.div`
  color : ${ props => props.theme.color };
  font-size: x-large;
  font-weight: 400;
  padding-top: 17px;
  flex-basis: 50px;
  text-align: end;
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: 115px;
`
export const URLShow = styled.div`
  color: ${props => props.theme. color};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  flex-basis: 400px;
  
  margin: 17px 0 0 170px;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 50px;
`

export const ButtonCheckRateLimit = styled.div`
  flex-basis: 100px;
  height: 90%;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  background-color: black;
  text-decoration: none;
  text-align: center;
  margin: 3px 0 0 375px;
  border-radius: 10px;
  padding-top: 15px;
  opacity: 1;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`
export const RateLimitSpan = styled.span`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  font-weight: 300;
  flex-basis: 200px;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 19px 0 0 0 ;
`