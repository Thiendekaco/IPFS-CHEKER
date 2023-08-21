import {
    HeaderContentStyles,
    InformationContent,
    TitleHeader,
    TitleHeaderContainerStyle,
    InformationItem, ImageNFT, SpanInformation
} from "./HeaderContent.styles";
import {useContext, CSSProperties, useState} from "react";
import { GatewayContext } from "../../context";
import {BaseChecked} from "../../class/baseCheck.class";
import {fadeUp} from "../../styles/animation.styles";
import {keyframes} from "styled-components";

const HeaderContentComponent = ()=>{
    const { gateway } = useContext( GatewayContext );
    const [ counter, setCounter ] = useState(0)
    const [ linkNFTImgae, setLinkNFTImage ] = useState('')

    setTimeout(()=>{
        setCounter(BaseChecked.gatewayArr)
        setLinkNFTImage(BaseChecked.gatewayArrIndex0)
    }, 7000)
    return(
        <HeaderContentStyles>
            <TitleHeaderContainerStyle>
                <TitleHeader >
                    IPFS CHECKER
                </TitleHeader>
            </TitleHeaderContainerStyle>
            <InformationContent >
                <InformationItem image={'false'}>
                    Total ipfs
                    <SpanInformation >
                    {gateway.length}
                    </SpanInformation>
                </InformationItem>
                <InformationItem image={'false'}>
                    Can Connect
                    <SpanInformation>
                    {counter/2}
                    </SpanInformation>
                </InformationItem>
                <InformationItem image={'true'}>
                    NFT Image
                    {linkNFTImgae !== '' && <ImageNFT src={linkNFTImgae} /> }
                </InformationItem>
            </InformationContent>
        </HeaderContentStyles>

    )


}


export default HeaderContentComponent;