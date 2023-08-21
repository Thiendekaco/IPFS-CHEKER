import { BaseChecked } from "./baseCheck.class";
import { createGatewayHostIpfs } from "../ipfs/createGatewayHostIpfs.ipfs";
import { propsOnCheck } from "../types";

//
// export class CheckRareLimitClass extends BaseChecked{
//     private rareLimit : number;
//
//     constructor() {
//         super();
//         this.rareLimit = 0;
//     }
//
//
//     getRareLimit(): number {
//         return this.rareLimit;
//     }
//
//
//
//     async onCheck({ gateWayUrl, typeCheck, cid }: propsOnCheck ){
//         if(!gateWayUrl|| !typeCheck) {
//             return ;
//         }else{
//                 this.urlNFT = createGatewayHostIpfs({gateWayUrl, typeCheck, cid});
//                 // while(true) {
//                 //     try {
//                 //         setTimeout(async () => {
//                 //         await this.getResponseNFT(this.urlNFT);
//                 //         this.rareLimit += 1;
//                 //         }, 1000)
//                 //     } catch (error) {
//                 //         break;
//                 //     }
//                 // }
//
//         }
//         this.setIsLoading(true);
//     }
// }