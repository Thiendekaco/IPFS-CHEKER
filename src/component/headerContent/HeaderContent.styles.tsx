import {keyframes, styled} from "styled-components";
import {fadeUp, slideDown} from "../../styles/animation.styles";
import {CSSProperties} from "react";


export interface isImage {
    image: string
}


export const HeaderContentStyles = styled.div`
    width: 100%;
    display: block;
    background:  linear-gradient(to bottom, ${props => props.theme.background_colorHeader}, transparent), linear-gradient(to bottom, #000, transparent);
`
export const TitleHeaderContainerStyle =  styled.div`
    width: 90%;
    margin: auto;
`

export const TitleHeader = styled.h1`
    color: ${props => props.theme.color};   
    font-family: ${props => props.theme.fontFamily};
    font-size: xx-large;
`

export const InformationContent = styled.div`
    display: flex; 
    flex-direction: row;
    margin: auto;
    width: 90%;
    height: 90%;
`

export const InformationItem = styled.div<isImage>`
  font-family: ${props => props.theme.fontFamily };
  font-size: medium;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-right: 2px double ${props => props.image === 'false' ? props.theme.backgroundColorCollection : 'transparent' };
  width: 30%;
  height: 190px;
  color: ${ props => props.theme.color };
  animation: ${ slideDown } ease-in-out 0.3s;
`
export const ImageNFT = styled.img`
  width: 170px;
  height: 100%;
  margin-top: 10px;
  object-fit: cover;
  border-radius: 20px;
  border: double 1px ${props => props.theme.backgroundColorCollection};
  animation: ${fadeUp} ease-in-out 2s;
  cursor: pointer;
  &:hover {
    border-color: #2b2b5a;
  }
`
export const NotFoundImageNFT = styled.div`
  width: 170px;
  height: 100%;
  margin-top: 10px;;
  border-radius: 20px;
  background-color: ${ props => props.theme. backgroundColorCollection}; ;
  border: double 1px ${ props => props.theme. backgroundColorCollection};
  animation: ${ fadeUp } ease-in-out 1s;
`
export  const SpanInformation = styled.span`
    font-family : ${ props => props.theme.fontFamily};
    color:  ${ props => props.theme.color};
    font-size : xxx-large;
    white-space: nowrap;
    margin: 20px 0 0 0;
    animation : ${ fadeUp } ease-in-out 0.3s
  
`