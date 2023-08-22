import { BaseChecked } from "./baseCheck.class";
import {propsOnCheck} from "../types";
import {createGatewayHostIpfs} from "../ipfs/createGatewayHostIpfs.ipfs";



export class CheckCordsHostClass extends BaseChecked{
     private  hadCords : boolean;

    constructor() {
        super();
        this.hadCords = false;
    }


    getHadCords(): boolean {
        return this.hadCords;
    }


    async onCheck({ gateWayUrl, typeCheck, cid }: propsOnCheck ){
        if(!gateWayUrl|| !typeCheck) {
            this.hadCords = false;
            return ;
        }else{
            try{
                this.urlNFT = createGatewayHostIpfs({gateWayUrl, typeCheck, cid});
                await this.getResponseNFT(this.urlNFT).then(
                    ()=>{
                        if( !this.statusCodeUrlNFT.data ){
                            this.hadCords = false;
                            return;
                        }
                        this.hadCords = true;
                    }
                )

            }catch (error){}
        }
        this.setIsLoading(true);
    }





}