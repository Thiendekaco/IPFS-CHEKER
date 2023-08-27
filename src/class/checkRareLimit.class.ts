import { BaseChecked } from "./baseCheck.class";
import { createGatewayHostIpfs } from "../ipfs/createGatewayHostIpfs.ipfs";
import { propsOnCheck } from "../types";
import axios from "axios";
import { CID_TO_TEST_LIMIT_2 } from "../utils/constant";


export class CheckRareLimitClass extends BaseChecked{
    private _timeResult : number;
    private _errorRequest : number = 0;
    private _totalRequest : number = 1000;
    private isLoop : boolean = true;

    setTotalRequest(value: number) {
        this._totalRequest = value;
    }
    getTimeResult(): number {
        return this._timeResult;
    }

    constructor() {
        super();
        this._timeResult = 0;
    }


    getErrorRequest(): number {
        return this._errorRequest;
    }

    getTotalRequest(): number {
        return this._totalRequest;
    }

    async checkLimitOfHost(date : number, NFTUrl : string){
        try{
            await  Promise.all([ axios.get(NFTUrl), axios.get(NFTUrl), axios.get(NFTUrl), axios.get(NFTUrl)]);
        }catch(e){
            this._errorRequest ++;
            console.log(Date.now(), date)
            this._timeResult = Date.now() - date;
            this.isLoop = false;
            console.log('END', this._errorRequest, this._timeResult);
        }
    }

    async onCheck({ gateWayUrl, typeCheck, cid }: propsOnCheck ){
        if(!gateWayUrl|| !typeCheck) {
            return ;
        }else{
            console.log('error', this._timeResult);
            this.isLoop = true;
            this._errorRequest = 0;
            this._timeResult = 0;
            const dateStart = Date.now();
            this.urlNFT = createGatewayHostIpfs({gateWayUrl, typeCheck, cid});
            let arrList = [];
            for( let i = 0 ; i < this._totalRequest ;  i++){
                arrList.push(this.checkLimitOfHost(dateStart, createGatewayHostIpfs({gateWayUrl, typeCheck, cid : CID_TO_TEST_LIMIT_2}, )));
            }
            await Promise.all(arrList);
        }
    }
}