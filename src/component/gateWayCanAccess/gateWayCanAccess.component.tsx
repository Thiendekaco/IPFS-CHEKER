import { useState, useEffect } from "react";
import { propsOnCheck } from "../../types";
import { CheckOnlineGateWayClass } from "../../class/checkOnlineGateWay.class";
import {
    ButtonCheckRateLimit,
    CheckCordsStyle,
    HostNameItemStyles,
    HostNameStyles,
    ImgCountryHost,
    ImgCountryHostNotFound,
    MarginBox, RateLimitSpan, URLShow
} from "./gateWayCanAccess.styles";
import { CheckCountryHostClass } from "../../class/checkCountryHost.class";
import { propertiesOfOnCheck } from '../../types';
import { toShort } from "@subwallet/react-ui/es/_util/address";
import {BaseChecked} from "../../class/baseCheck.class";
import {CheckCordsHostClass} from "../../class/checkCords.class";
import {CID_TO_TEST_CORDS} from "../../utils/constant";
import { useNavigate } from "react-router";


export  const defaultProperties : propertiesOfOnCheck ={
    data : '',
    isLoading: false
}

export interface gatewayProps {
    onCheckProps: propsOnCheck,
    index : number
}


const GateWayCanAccess = ( { onCheckProps, index} :gatewayProps )=>{
    const navigate = useNavigate();
    const [ resultCheckLocation, getResultCheckLocation ] = useState<propertiesOfOnCheck>(defaultProperties);
    const [ resultCheckAccess, getResultCheckAccess ] = useState<propertiesOfOnCheck>(defaultProperties);
    const [ isUrlCanBeAccess, setIsUrlAccess ] = useState(false);
    const [ isCords_, setIsCords ] = useState(false);
    const gateWayCheckAccess = new CheckOnlineGateWayClass();
    const gateWayCheckLocation = new CheckCountryHostClass();
    const isCords = new CheckCordsHostClass();

    const getUrlCanBeAccess = async ()=>{
        await gateWayCheckAccess.onCheck({gateWayUrl: onCheckProps.gateWayUrl, typeCheck: onCheckProps.typeCheck,});
        getResultCheckAccess({data : gateWayCheckAccess.getLinkImage(), isLoading : gateWayCheckAccess.getIsLoading() });
        setIsUrlAccess(gateWayCheckAccess.getStateIsOnline());
        if(gateWayCheckAccess.getStateIsOnline()){
            if(BaseChecked.gatewayArr === 0){
                BaseChecked.gatewayArrIndex0 = gateWayCheckAccess.getLinkImage();
            }
            BaseChecked.gatewayArr++;
            }
    }

    const getLocationOfHostName =  async ()=>{
        await gateWayCheckLocation.onCheck({ gateWayUrl: onCheckProps.gateWayUrl, typeCheck: onCheckProps.typeCheck, });
        getResultCheckLocation({data : gateWayCheckLocation.getLinkImage(), isLoading: gateWayCheckLocation.getIsLoading()});
    }

    const getStateCords = async () =>{
        await isCords.onCheck({gateWayUrl: onCheckProps.gateWayUrl, typeCheck: onCheckProps.typeCheck, cid : CID_TO_TEST_CORDS });
        setIsCords(isCords.getHadCords());
    }

    const openWindowNFT  = ()=>{
        window.open(resultCheckAccess.data)
    }
    const navigateToCheckLimitPage = () => {
        if(gateWayCheckAccess.getStateIsOnline()){
            if(BaseChecked.gatewayArr === 0){
                BaseChecked.gatewayArrIndex0 = gateWayCheckAccess.getLinkImage();
            }
            BaseChecked.gatewayArr++;
        }
        navigate(`/${onCheckProps.gateWayUrl}+${onCheckProps.typeCheck}`);
    }


    useEffect(() => {
        getResultCheckAccess({...resultCheckAccess, isLoading: true});
        getResultCheckLocation({...resultCheckLocation, isLoading : true})
        try{
            Promise.allSettled([
                getLocationOfHostName(),
                getUrlCanBeAccess(),
                getStateCords()
            ]).then(()=> {})

        }catch (e){}

    }, [gateWayCheckAccess.getLinkImage(), gateWayCheckLocation.getLinkImage(), onCheckProps.typeCheck, isCords.getHadCords()]);



    return (
        <>
            {
                isUrlCanBeAccess && <HostNameItemStyles >
                    { resultCheckAccess.isLoading && <MarginBox /> }
                    < HostNameStyles onClick = {()=>openWindowNFT()}>{toShort(onCheckProps.gateWayUrl.replace('*', ''), 25, 0)}</HostNameStyles>
                    <div style={{flexBasis : '300px', flexShrink: '1', flexGrow: '0', maxWidth:'500px'}}>
                        { resultCheckLocation.data ?  <ImgCountryHost src={ resultCheckLocation.data } alt={ resultCheckLocation.data }/> : <ImgCountryHostNotFound /> }
                    </div>
                    <CheckCordsStyle>{ isCords_  ? '*' : <MarginBox />}</CheckCordsStyle>
                    <URLShow>{ resultCheckAccess.data }</URLShow>
                    <ButtonCheckRateLimit onClick = {navigateToCheckLimitPage}>Rate Limit</ButtonCheckRateLimit>

                </HostNameItemStyles>
            }
        </>

    )
}


export  default  GateWayCanAccess;