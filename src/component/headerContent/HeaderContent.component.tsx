import {
    HeaderContentStyles,
    InformationContent,
    TitleHeader,
    TitleHeaderContainerStyle,
    InformationItem,
    ImageNFT,
    SpanInformation,
    NotFoundImageNFT
} from "./HeaderContent.styles";
import {useContext, CSSProperties, useState, useEffect} from "react";
import { GatewayContext } from "../../context";
import {BaseChecked} from "../../class/baseCheck.class";
import {useParams} from "react-router";
import GateWay from "../../utils/gateWay";


const HeaderContentComponent = ()=>{
    const { gateway } = useContext( GatewayContext );
    const [ counter, setCounter ] = useState(0)
    const [ linkNFTImage, setLinkNFTImage ] = useState('')
    const param = useParams();

    useEffect(() => {
        BaseChecked.gatewayArr = 0;
        BaseChecked.gatewayArrIndex0 = '';
        setCounter(0)
    }, [ param ]);

    setTimeout(()=>{
        setCounter(BaseChecked.gatewayArr);
        setLinkNFTImage(BaseChecked.gatewayArrIndex0);
    }, 5500)
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
                    { counter }
                    </SpanInformation>
                </InformationItem>
                <InformationItem image={'true'}>
                    NFT Image
                    { linkNFTImage !== '' ? <ImageNFT src={linkNFTImage} /> : <NotFoundImageNFT /> }
                </InformationItem>
            </InformationContent>
        </HeaderContentStyles>
    )


}


export default HeaderContentComponent;