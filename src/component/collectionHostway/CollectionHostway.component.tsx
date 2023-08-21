import { useContext } from "react";
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
const CollectionHostwayComponent = () =>{
    const { gateway} = useContext(GatewayContext);

    return(
        <CollectionHostwayStyles>
            <NavigateContainer>
                <NavigateFormatHostName >Type 1</NavigateFormatHostName>
                <NavigateFormatHostName >Type 2</NavigateFormatHostName>
                <NavigateFormatHostName >Type 3</NavigateFormatHostName>
            </NavigateContainer>
            {/*<LabelContainer>*/}
            {/*    <Label>HostName</Label>*/}
            {/*    <Label>Country</Label>*/}
            {/*</LabelContainer>*/}
            <ContentContainer>

                {
                    gateway.map((gateWayHostName, index) => (
                        <GateWayCanAccess onCheckProps={ { gateWayUrl: gateWayHostName, typeCheck: 1, } } key={ index } index={ index } />

                    ))
                }
                {
                    gateway.map((gateWayHostName, index) => (
                        <GateWayCanNotAccess onCheckProps={ { gateWayUrl: gateWayHostName, typeCheck: 1, } } key={ index } />
                    ))
                }
            </ContentContainer>
        </CollectionHostwayStyles>

    )

}


export  default  CollectionHostwayComponent;