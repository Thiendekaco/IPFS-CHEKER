import { styled } from "styled-components";
import { fadeUp } from "../../styles/animation.styles";

export interface propsOfButtonCheck  {
    isLoading : boolean
}



export const RateLimitPageStyles = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${ props => props.theme.color };
  font-family: ${ props => props.theme.fontFamily };
  background:  linear-gradient(to bottom, ${props => props.theme.background_colorHeader}, transparent), linear-gradient(to bottom, #000, transparent);
`

export const TotalLimitCheck = styled.div`

    
`
export const IPFSHostName = styled.h5`
  border: 1px solid transparent;
  padding: 20px;
  text-align: center;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 1);
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundCheck};
  
`

export const ContainerInformation = styled.div`
    flex-basis: 400px;
    height: 100%;
    flex-grow: 1;
    display: flex ;
    flex-direction: column;
`

export const Information = styled.span`
    color: ${props => props.theme.color};
    font-size: xx-large;
    margin: -10px 0 0 10px;
    flex-shrink: 1;
    flex-basis: 400px;
    animation: ${fadeUp} 0.4s ease-in-out;
`



export const NFTContainer = styled.div`
    margin: auto;
    flex-basis: 300px;
    justify-items: center;
    flex-shrink: 1;
    flex-grow: 1;
`

export const NFTItem = styled.img`
  width: 300px;
  display: block;
  height: 300px;
  margin: auto;
  padding-top: 2px ;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 1);
  border: double 1px transparent;
  animation: ${fadeUp} ease-in-out 2s;
  cursor: pointer;

`



export const HeaderContentStyles = styled.div`
    width: 90%;
    margin: auto;
    height: 40px;
    display: flex;
    flex-direction: row;
   
`
export const TitleHeaderContainerStyle =  styled.h1`
    font-size: x-large;
    flex-basis: 1500px;
    flex-shrink: 1;
    
`
export const ContentInformation = styled.div`
    width: 90%;
    display: flex;
    margin: 50px 0 0 0;    
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 0;
    flex-wrap: wrap;
    flex-basis: 250px;
    flex-direction: row;
    animation: ${ fadeUp } ease-in-out 1s;
    &::-webkit-scrollbar {
      display: none;
    }

`
export const Label = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: gray;
  padding: 23px;
  align-items: center;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  flex-basis: 150px;
  border: 1px solid transparent;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 1);
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundCheck};
  font-weight: 700;
  flex-grow: 1;
  white-space: nowrap;
  margin: 10px 20px 20px  0;
`
export const ButtonCheck = styled.button<propsOfButtonCheck>`
  flex-basis: 200px;
  flex-shrink: 1;
  cursor: ${props => !props.isLoading ? 'pointer' : 'default'};
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  font-size: medium;
  border: 1px solid transparent;
  margin: 22px 0 0 20px;
  text-align: center;
  opacity: 1;
  height: 60px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 1);
  border-radius: 10px;
  background-color: black;
  transition: opacity 0.3s ease-in-out;
  
  &:hover{
    opacity: ${props => !props.isLoading ? '0.5' : '1'};
  }
`

export const NotFoundImageNFT = styled.div`
  border-radius: 20px;
  background-color: transparent;
  width: 300px;
  display: block;
  height: 300px;
  margin: auto;
  padding-top: 2px ;
  object-fit: cover;
  box-shadow: 10px 4px 15px 10px rgba(0, 0, 0, 1);
  border: double 1px transparent ;
  animation: ${fadeUp} ease-in-out 2s;
  cursor: pointer;

`
export const ButtonBackToMainPage = styled.button`
  flex-basis: 200px;
  flex-shrink: 1;
  cursor: pointer;
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  font-size: medium;
  border: 1px solid transparent;
  margin: 20px 0 0 20px;
  text-align: center;
  opacity: 1;
  height: 40px;
  border-radius: 10px;
  background-color: black;
  transition: opacity 0.3s ease-in-out;
  
  &:hover{
    opacity: 0.5;
  }
`