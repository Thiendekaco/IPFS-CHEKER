import { BaseChecked } from "./baseCheck.class";
import { createGatewayHostIpfs } from "../ipfs/createGatewayHostIpfs.ipfs";
import { propsOnCheck } from "../types";


export class CheckOnlineGateWayClass extends BaseChecked{
    private isOnline : boolean;
    private  _linkImage : string;
    private isAuthentication : boolean = false;
    constructor() {
        super();
        this._linkImage = '';
        this.isOnline = false;
    }


     getStateIsOnline(): boolean {
        return this.isOnline;
    }


     getLinkImage(): string {
        return this._linkImage;
    }
    getAuthentiCation (){
        return this.isAuthentication
    }

     async onCheck({ gateWayUrl, typeCheck, cid }: propsOnCheck ){
        if(!gateWayUrl|| !typeCheck) {
            this.isOnline = false;
            return ;
        }else{
            try{
                this.urlNFT = createGatewayHostIpfs({gateWayUrl, typeCheck, cid});
                 await this.getResponseNFT(this.urlNFT).then(
                     ()=>{
                         if( !this.statusCodeUrlNFT.data ){
                             this.isOnline = false;
                             return;
                         }
                         this.isOnline = true;
                         this._linkImage = this.urlNFT;
                     }
                 )
                BaseChecked.statusCode === 401 ? this.isAuthentication = true : this.isAuthentication = false;
            }catch (error){

            }
        }
        this.setIsLoading(true);
    }
}