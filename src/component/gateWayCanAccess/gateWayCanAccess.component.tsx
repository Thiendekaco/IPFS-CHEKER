import { useState, useEffect } from "react";
import { propsOnCheck } from "../../types";
import { CheckOnlineGateWayClass } from "../../class/checkOnlineGateWay.class";
import {
    HostNameItemStyles,
    HostNameStyles,
    ImgCountryHost,
    ImgCountryHostNotFound,
    MarginBox
} from "./gateWayCanAccess.styles";
import { CheckCountryHostClass } from "../../class/checkCountryHost.class";
import { propertiesOfOnCheck } from '../../types';
import { toShort } from "@subwallet/react-ui/es/_util/address";
import {BaseChecked} from "../../class/baseCheck.class";


export  const defaultProperties : propertiesOfOnCheck ={
    data : '',
    isLoading: false
}

export interface gatewayProps {
    onCheckProps: propsOnCheck,
    index : number
}


const GateWayCanAccess = ( { onCheckProps, index} :gatewayProps )=>{
    const [ resultCheckLocation, getResultCheckLocation ] = useState<propertiesOfOnCheck>(defaultProperties);
    const [ resultCheckAccess, getResultCheckAccess ] = useState<propertiesOfOnCheck>(defaultProperties);
    const [ isUrlCanBeAccess, setIsUrlAccess ] = useState(false);
    const gateWayCheckAccess = new CheckOnlineGateWayClass();
    const gateWayCheckLocation = new CheckCountryHostClass();



    const getUrlCanBeAccess = async ()=>{
        await gateWayCheckAccess.onCheck({gateWayUrl: onCheckProps.gateWayUrl, typeCheck: 1,});

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
        await gateWayCheckLocation.onCheck({gateWayUrl: onCheckProps.gateWayUrl, typeCheck: 1,});
        getResultCheckLocation({data : gateWayCheckLocation.getLinkImage(), isLoading: gateWayCheckLocation.getIsLoading()});
    }

    const openWindowNFT  = ()=>{
        window.open(resultCheckAccess.data)
    }

    useEffect(() => {

        getResultCheckAccess({...resultCheckAccess, isLoading: true});
        getResultCheckLocation({...resultCheckLocation, isLoading : true})
        try{
            Promise.allSettled([
                getLocationOfHostName(),
                getUrlCanBeAccess()
            ]).then(()=> {})

        }catch (e){}


    }, [gateWayCheckAccess.getLinkImage(), gateWayCheckLocation.getLinkImage()]);


    return (
        <>
            {
                isUrlCanBeAccess && <HostNameItemStyles onClick = {()=>openWindowNFT()}>
                    { resultCheckAccess.isLoading && <MarginBox /> }
                    < HostNameStyles >{toShort(onCheckProps.gateWayUrl.replace('*', ''), 25, 0)}</HostNameStyles>
                    { resultCheckLocation.data ?  <ImgCountryHost src={ resultCheckLocation.data } alt={ resultCheckLocation.data }/> : <ImgCountryHostNotFound /> }
                </HostNameItemStyles>
            }
        </>

    )
}


export  default  GateWayCanAccess;