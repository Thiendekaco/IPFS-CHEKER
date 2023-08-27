
import React, { useEffect, useState, CSSProperties } from "react";
import { CheckRareLimitClass } from "../../class/checkRareLimit.class";
import { useParams, useNavigate } from "react-router";
import {
    ContainerInformation,
    ContentInformation,
    HeaderContentStyles, IPFSHostName, NFTContainer, NFTItem,
    RateLimitPageStyles, Information, NotFoundImageNFT,
    TitleHeaderContainerStyle, Label, ButtonCheck, ButtonBackToMainPage
} from "./RateLimitPage.styles";
import { Plus, Minus } from "phosphor-react";
import Spinner from "../../component/spinner/Spinner.component";
import { BaseChecked } from "../../class/baseCheck.class";


export const styleIcon : CSSProperties = {
    'margin' : ' 0 10px 0 20px',
    'cursor' : 'pointer'
}


const RateLimitPage = ()=>{
    const rateLimit_ = new CheckRareLimitClass();
    const param = useParams();
    const arrParam = param['*'] ? param['*'].split(/\+/) : [];
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ rateLimit, setRateLimit ] = useState(0);
    const [ countErrorRequest, setCountRequest ] = useState(0);
    const [ totalRequest, setTotalRequest ] = useState(1000);
    const [ linkNFTImage, setLinkNFTImage ] = useState('')

    const handleGetRateLimit = (e : React.MouseEvent<HTMLButtonElement>) =>{
        (e.target as HTMLButtonElement).disabled = true;
        setRateLimit(0);
        setIsLoading(true);
        setTimeout(()=>{
            param['*']&&rateLimit_.onCheck({gateWayUrl: arrParam[0], typeCheck: Number.parseInt(arrParam[1]),})
        },1000)
        setTimeout(()=>{
            const totalRequest = rateLimit_.getTotalRequest();
            const errorRequest = rateLimit_.getErrorRequest();
            const timeResult = rateLimit_.getTimeResult();
            timeResult !== 0 && setRateLimit(Math.round(( totalRequest - errorRequest)* 1000/ timeResult ) );
            setTotalRequest(totalRequest);
            setCountRequest(errorRequest);
            setIsLoading(false)
        }, 3500)

    }
    const handleBackToMainPage = () =>{
        localStorage.setItem('previousParam', 'checkRateLimit');
        navigate(`/type${arrParam[1]}`)
    }
    useEffect(() => {
        setLinkNFTImage(BaseChecked.gatewayArrIndex0);
    }, []);

    const handlePlusTotalRequest  = ()=>{
        rateLimit_.setTotalRequest(totalRequest + 1000);
        setTotalRequest(totalRequest + 1000);
    }
    const handleMinusTotalRequest = () =>{
        if(totalRequest > 1000){
            rateLimit_.setTotalRequest(totalRequest - 1000);
            setTotalRequest(totalRequest - 1000);
        }
    }





    return(
        <RateLimitPageStyles >
            <HeaderContentStyles>
                <TitleHeaderContainerStyle>
                    IPFS CHECKER
                </TitleHeaderContainerStyle>
                <ButtonBackToMainPage onClick={() =>handleBackToMainPage()}>
                    BACK
                </ButtonBackToMainPage>
            </HeaderContentStyles>
            <ContentInformation>
                <ContainerInformation>
                    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', marginTop: '25px'}}>
                        <IPFSHostName>
                            { arrParam[0]?.toUpperCase() }
                        </IPFSHostName>
                        <ButtonCheck onClick={(e) =>handleGetRateLimit(e)} disabled={isLoading} isLoading={isLoading}>
                            CHECK
                        </ButtonCheck>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', marginTop: '25px'}}>
                        <Label>
                            Rate Limit
                            <Information>
                                { isLoading ? <Spinner /> : rateLimit }
                            </Information>
                        </Label>
                        <Label>
                            Unit Time
                            <Information>
                                1 s
                            </Information>
                        </Label>
                        <Label>
                            Error Request
                            <Information>
                                { isLoading ? <Spinner/> : countErrorRequest }
                            </Information>
                        </Label>
                        <Label>
                            Total Request have been sent
                            <Information>
                                { totalRequest }
                            </Information>
                            <Plus size={30} color="#FFFFFF" weight="bold" style={styleIcon} onClick={handlePlusTotalRequest}/>
                            <Minus size={30} color="#FFFFFF" weight="bold" style={{cursor: 'pointer'}} onClick={handleMinusTotalRequest}/>
                        </Label>
                    </div>

                </ContainerInformation>
                <NFTContainer>
                    { linkNFTImage !== '' ? <NFTItem src={ linkNFTImage } alt={''} /> : <NotFoundImageNFT /> }
                </NFTContainer>
            </ContentInformation>
        </RateLimitPageStyles>
    )
}


export default RateLimitPage;