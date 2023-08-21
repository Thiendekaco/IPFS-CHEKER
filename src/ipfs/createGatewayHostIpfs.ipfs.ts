import {CID} from "../utils/constant";
import {propsOnCheck} from "../types";


export const createGatewayHostIpfs  = ({ gateWayUrl, typeCheck, cid } : propsOnCheck) =>{
    let UrlCheckNFT : string ;
    const UrlProtocol = gateWayUrl.includes('*') ?  'http:' : 'https:';
    switch (typeCheck){
        case 1 : {
            UrlCheckNFT = `${UrlProtocol}//${gateWayUrl}/ipfs/${cid === undefined  ? CID : cid}`;
            break;
        }
        case  2 : {
            UrlCheckNFT = `${UrlProtocol}//${gateWayUrl}/${cid === undefined  ? CID : cid}`;
            break;
        }
        case 3 : {
            UrlCheckNFT = `${UrlProtocol}//${cid === undefined  ? CID : cid}.ipfs.${gateWayUrl}`;
            break;
        }
        default:{
            UrlCheckNFT = '';
        }

    }

    return UrlCheckNFT;
}