import  { styled } from "styled-components";


export interface propsIsLoading {
    isLoading : boolean;
}



export const HostNameItemStyles = styled.div<propsIsLoading>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  height : 60px;
  padding-left: 10px;
  border-radius : 10px;
  border: 1px solid ${props => props.isLoading ? props.theme.backgroundColorCollection : props.theme.borderColorCantAccess};
  background-color : ${props => props.theme.backgroundColorCollection};
  transition: opacity 0.2s ease-in-out;
  opacity: 0.9 ;
  &:hover {
    opacity: 1;
  }
`
export const HostNameStyles = styled.h4`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  font-weight: 300;
  width: 40%;
  margin-top: 17px;
`

export const ImgCountryHost = styled.img`
  width: 25px;
  height: 25px;
  border: solid 0 transparent;
  border-radius: 30%;
  margin-top: 17px;
`
export const ImgCountryHostNotFound = styled.div`
  width: 25px;
  height: 25px;
  border: solid 0 transparent;
  border-radius: 40%;
  background-color: ${ props => props.theme.background_colorContent };
  margin-top: 17px;
`
