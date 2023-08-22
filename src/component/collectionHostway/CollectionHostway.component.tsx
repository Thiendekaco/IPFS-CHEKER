import {useContext, useEffect, useState} from "react";
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
import {BaseChecked} from "../../class/baseCheck.class";
import GateWay from "../../utils/gateWay";


const CollectionHostwayComponent = () =>{
    const { gateway, setGateway} = useContext(GatewayContext);
    const param = useParams();
    const [ param_, setParam_ ] = useState(0);
    useEffect(() => {
        setGateway(GateWay);
        setParam_(param['*'] ? Number.parseInt((param['*']?.replace('type', ''))) : 0)
        BaseChecked.gatewayArr = 0;
        BaseChecked.gatewayArrIndex0 = ''
    }, [param]);
    return(
        <CollectionHostwayStyles>
            <NavigateContainer>
                <NavigateFormatHostName to = '/type1' >Type 1</NavigateFormatHostName>
                <NavigateFormatHostName to = '/type2' >Type 2</NavigateFormatHostName>
                <NavigateFormatHostName to = '/type3'>Type 3</NavigateFormatHostName>
            </NavigateContainer>
            {/*<LabelContainer>*/}
            {/*    <Label>HostName</Label>*/}
            {/*    <Label>Country</Label>*/}
            {/*</LabelContainer>*/}
            <ContentContainer>

                {
                    gateway.map((gateWayHostName, index) => (
                        <GateWayCanAccess onCheckProps={ { gateWayUrl: gateWayHostName, typeCheck: param_, } } key={ index } index={ index } />

                    ))
                }
                {
                    gateway.map((gateWayHostName, index) => (
                        <GateWayCanNotAccess onCheckProps={ { gateWayUrl: gateWayHostName, typeCheck: param_, } } key={ index } />
                    ))
                }
            </ContentContainer>
        </CollectionHostwayStyles>

    )

}


export  default  CollectionHostwayComponent;