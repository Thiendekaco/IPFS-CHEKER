import { useState, useEffect } from "react";
import { propsOnCheck } from "../../types";
import { CheckOnlineGateWayClass } from "../../class/checkOnlineGateWay.class";
import {
    HostNameItemStyles,
    HostNameStyles,
    ImgCountryHost,
    ImgCountryHostNotFound,
    URLShow
} from "./gateWayCan'tAccess.styles";
import { CheckCountryHostClass } from "../../class/checkCountryHost.class";
import { propertiesOfOnCheck } from '../../types';
import { toShort } from "@subwallet/react-ui/es/_util/address";
import Spinner from "../spinner/Spinner.component";
import { MarginBox } from "../gateWayCanAccess/gateWayCanAccess.styles";



export  const defaultProperties : propertiesOfOnCheck ={
    data : '',
    isLoading: false
}
export interface GateWayInterface {
    onCheckProps : propsOnCheck
}



const GateWayCanNotAccess = ( { onCheckProps }:  GateWayInterface )=>{
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isUrlCanBeAccess, setIsUrlAccess ]= useState(false);
    const [ resultCheckLocation, getResultCheckLocation ] = useState<propertiesOfOnCheck>(defaultProperties);
    const gateWayCheckAccess = new CheckOnlineGateWayClass();
    const gateWayCheckLocation = new CheckCountryHostClass();
    const getUrlCanBeAccess = async ()=>{
        await gateWayCheckAccess.onCheck({gateWayUrl: onCheckProps.gateWayUrl, typeCheck: onCheckProps.typeCheck,});
        setIsUrlAccess(gateWayCheckAccess.getStateIsOnline());
        setIsLoading(false);
    }
    const getLocationOfHostName =  async ()=>{
        await gateWayCheckLocation.onCheck({gateWayUrl: onCheckProps.gateWayUrl, typeCheck: onCheckProps.typeCheck,});
        getResultCheckLocation({data : gateWayCheckLocation.getLinkImage(), isLoading: gateWayCheckLocation.getIsLoading()});
    }
    useEffect(() => {
        getResultCheckLocation({...resultCheckLocation, isLoading : true})

        try{
            Promise.allSettled([
                getLocationOfHostName(),
                getUrlCanBeAccess()
            ]).then(()=> {})
        }catch (e){}
    }, [gateWayCheckAccess.getLinkImage(), gateWayCheckLocation.getLinkImage(), onCheckProps.typeCheck]);

    return (
        <>
            {
                !isUrlCanBeAccess && <HostNameItemStyles isLoading = { isLoading }>
                    { isLoading ? <Spinner />  : <MarginBox />  }
                    <HostNameStyles>{toShort(onCheckProps.gateWayUrl.replace('*', ''), 20, 0)}</HostNameStyles>
                    <div style={{flexBasis : '300px', flexShrink: '1', flexGrow: '0', maxWidth:'500px'}}>
                        {  resultCheckLocation.data ?  <ImgCountryHost src={ resultCheckLocation.data } alt={ resultCheckLocation.data }/> : <ImgCountryHostNotFound />}
                    </div>
                    <URLShow> { gateWayCheckAccess.getLinkImage() } </URLShow>
                </HostNameItemStyles>
            }
        </>
    )
}


export  default  GateWayCanNotAccess;