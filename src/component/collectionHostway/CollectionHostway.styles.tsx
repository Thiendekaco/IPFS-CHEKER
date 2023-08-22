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


export const NavigateFormatHostName = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
  margin-right: 20px;
  font-family: ${props => props.theme.fontFamily};
  
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow-y: scroll ;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: ${ fadeUp } ease-in-out 1s;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 100px 10px 50px;
`

export const Label = styled.div`
  font-family: ${props => props.theme.fontFamily };
  color: gray;
  font-size: small;
  font-weight: 700;
  width: 40%;
`
