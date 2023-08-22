import {CSSProperties, useContext, useEffect, useState} from "react";
import { GatewayContext } from "../../context";
import {
    CollectionHostwayStyles,
    ContentContainer,
    NavigateContainer,
    NavigateFormatHostName,
    Label,
    LabelContainer
} from "./CollectionHostway.styles";
import GateWayCanNotAccess from "../gateWayCan'tAccess/gateWayCan'tAccess.component";
import GateWayCanAccess from "../gateWayCanAccess/gateWayCanAccess.component";
import { useParams } from "react-router";
import GateWay from "../../utils/gateWay";


export const styleLabelCountry : CSSProperties = {
    color: 'gray',
    fontSize: 'small',
    fontWeight: 700,
    marginLeft: '45px',
    width: '18%'
}
export const styleLabelCords : CSSProperties = {
    color: 'gray',
    fontSize: 'small',
    fontWeight: 700,
}

const CollectionHostwayComponent = () =>{
    const { setGateway } = useContext(GatewayContext);
    const param = useParams();
    const [ param_, setParam_ ] = useState(0);
    const [ showUp, setShowUp ] = useState(false);
    useEffect(() => {
        setShowUp(false);
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
                    <NavigateFormatHostName to='/type1'>Type 1</NavigateFormatHostName>
                    <NavigateFormatHostName to='/type2'>Type 2</NavigateFormatHostName>
                    <NavigateFormatHostName to='/type3'>Type 3</NavigateFormatHostName>
                </NavigateContainer>
                <LabelContainer>
                    <Label>HOSTNAME</Label>
                    <div style={styleLabelCountry}>COUNTRY</div>
                    <div style={styleLabelCords}>CORDS</div>
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
            </CollectionHostwayStyles>
        }</>

    )
}


export  default  CollectionHostwayComponent;