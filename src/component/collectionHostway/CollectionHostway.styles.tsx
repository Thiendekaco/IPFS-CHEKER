import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { fadeUp } from "../../styles/animation.styles";


export const CollectionHostwayStyles = styled.div`
    width: 90%;
    height: 75%;
    display: flex;
    flex-direction: column;
    margin: auto;
    animation: ${ fadeUp } ease-in-out 1s;
`


export const NavigateContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`


export const NavigateFormatHostName = styled.div`
  color: ${props => props.theme.color};
  text-decoration: none;
  margin-right: 20px;
  font-family: ${props => props.theme.fontFamily};
  
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: scroll ;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;

`

export const Label = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
`
