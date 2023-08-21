import { useState, useContext } from "react";
import { GatewayContext } from "../context";
import GateWay from "../utils/gateWay";


export interface GateWayProps{
    children : React.ReactNode;
}

const GateWayProvider = ({ children } : GateWayProps) =>{
    const [ gateway, setGateway ] = useState(GateWay);
    const gatewayContextProps = {
        gateway,
        setGateway,
    }

    return(
        <GatewayContext.Provider value = { gatewayContextProps }>
            {children}
        </GatewayContext.Provider>
    )

}

export  default GateWayProvider;