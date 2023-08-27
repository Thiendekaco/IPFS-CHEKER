import {CSSProperties, useContext, useEffect, useState} from "react";
import { GatewayContext } from "../../context";
import {
    CollectionHostwayStyles,
    ContentContainer,
    NavigateContainer,
    NavigateFormatHostName,
    Label,
    LabelContainer, FooterDiv
} from "./CollectionHostway.styles";
import GateWayCanNotAccess from "../gateWayCan'tAccess/gateWayCan'tAccess.component";
import GateWayCanAccess from "../gateWayCanAccess/gateWayCanAccess.component";
import { useParams } from "react-router";
import GateWay from "../../utils/gateWay";


export const styleLabelCountry : CSSProperties = {
    color: 'gray',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 'small',
    textAlign: 'end',
    fontWeight: 700,
    flexBasis : '300px',
    flexShrink: 1,
    flexGrow: 0,
    marginTop: '17px',
}
export const styleLabelCords : CSSProperties = {
    flexBasis: '30px',
    flexShrink: '1',
    color: 'gray',
    fontFamily: 'Plus Jakarta Sans',
    paddingLeft: '95px',
    fontSize: 'small',
    fontWeight: 700,
    paddingTop: '17px',
}
export const styleLabelURL: CSSProperties = {
    color: 'gray',
    textAlign: "center",
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 'small',
    fontWeight: 700,
    flexBasis: '400px',
    margin: '17px 0 0 130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingRight: '50px',
}

const CollectionHostwayComponent = () =>{
    const { setGateway } = useContext(GatewayContext);
    const param = useParams();
    const [ param_, setParam_ ] = useState(0);
    const [ showUp, setShowUp ] = useState(false);
    useEffect(() => {
        const previousParam = localStorage.getItem('previousParam');
        localStorage.setItem('previousParam', 'none');
        if(previousParam){
            previousParam === 'checkRateLimit' && window.location.reload();
        }
        setShowUp(false);
        console.log(param['*'])
        setGateway(GateWay);
        setParam_(param['*'] ? Number.parseInt((param['*']?.replace('type', ''))) : 0)
        setTimeout(()=>{
            setShowUp(true)
        }, 1000)
    }, [param]);

    return(
       <> {
            showUp && <CollectionHostwayStyles>
                <NavigateContainer>
                    <NavigateFormatHostName to='/type1' isChoide={ param['*'] === 'type1' }>Type 1</NavigateFormatHostName>
                    <NavigateFormatHostName to='/type2' isChoide={ param['*'] === 'type2' }>Type 2</NavigateFormatHostName>
                    <NavigateFormatHostName to='/type3' isChoide={ param['*'] === 'type3' }>Type 3</NavigateFormatHostName>
                </NavigateContainer>
                <LabelContainer>
                    <Label>HOSTNAME</Label>
                    <div style={ styleLabelCountry }>COUNTRY</div>
                    <div style={ styleLabelCords }>CORDS</div>
                    <div style={ styleLabelURL }>URL</div>
                </LabelContainer>
                <ContentContainer>
                    {
                        GateWay.map((gateWayHostName, index) => (
                            <GateWayCanAccess onCheckProps={{gateWayUrl: gateWayHostName, typeCheck: param_,}} key={index}
                                              index={index}/>
                        ))
                    }
                    {
                        GateWay.map((gateWayHostName, index) => (
                            <GateWayCanNotAccess onCheckProps={{gateWayUrl: gateWayHostName, typeCheck: param_,}} key={index}/>
                        ))
                    }
                </ContentContainer>
                <FooterDiv />
            </CollectionHostwayStyles>
        }</>

    )
}


export  default  CollectionHostwayComponent;