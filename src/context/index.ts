import { createContext } from "react";
import { gateWayInterface } from "../types";
import gateWay from "../utils/gateWay";
import {isNumberObject} from "util/types";
export const GatewayContext = createContext<gateWayInterface>({
    gateway : gateWay,
    setGateway : () => {}
})