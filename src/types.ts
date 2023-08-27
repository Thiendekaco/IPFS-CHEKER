

export interface gateWayType {
    state : boolean,
    cord : boolean,
    ipns : boolean,
    block : boolean,
    country : string,
    hostName : string
}
export type checkUrlInterface  = {
    status : number| string;
    data ?: string ;
}


export interface propsOnCheck {
    gateWayUrl: string,
    typeCheck : number,
    cid?: string
}

export interface propertiesOfOnCheck{
    data: string;
    isLoading : boolean;
}


export  interface gateWayInterface{
    gateway : string[];
    setGateway : (gateWay: string[]) => void;
}
export interface Theme {
    background_colorContent : string,
    background_colorHeader : string,
    color : string ,
    backgroundColorCollection : string,
    fontFamily : string,
    borderColorCanAccess : string,
    borderColorCantAccess : string,
    backgroundCheck : string
}