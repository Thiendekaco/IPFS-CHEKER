import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { fadeUp } from "../../styles/animation.styles";


export interface linkWasChoice {
    isChoide : boolean
}

export const CollectionHostwayStyles = styled.div`
    width: 90%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 3;
    flex-basis: 250px;
    flex-direction: column;
    animation: ${ fadeUp } ease-in-out 1s;
`


export const NavigateContainer = styled.div`
  flex-grow: 0;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`


export const NavigateFormatHostName = styled(Link)<linkWasChoice>`
  color: ${props => props.theme.color};
  text-decoration: none;
  margin-right: 20px;
  display: block;
  font-family: ${props => props.theme.fontFamily};
  &:after {
    content: '';
    display: block;
    margin-top: 8px;
    height: 1.5px;
    width: ${ props => props.isChoide ? '100%' : '0'};
    background: ${ props => props.isChoide ? 'white' : 'transparent'};;
    transition: width .3s ease, background-color .3s ease;
  }
  &:hover:after{
    width: 100%;
    background: white;

  }
`

export const ContentContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 200px;
  overflow-y: scroll ;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: -20px;
  animation: ${ fadeUp } ease-in-out 1s;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 50px;
`

export const Label = styled.div`
  font-family: ${props => props.theme.fontFamily };
  color: gray;
  font-size: small;
  font-weight: 700;
  flex-basis: 200px;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 19px 0 0 0 ;
`

export const FooterDiv = styled.div`
  //flex-grow: 0;
  //flex-basis: 100px;
`