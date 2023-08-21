import { BaseChecked } from "./baseCheck.class";
import { lookup } from 'ipfs-geoip';
import {propsOnCheck} from "../types";
import {dnsGoogle} from "../utils/constant";
import axios from "axios";
import { imgCountryHostName } from "../utils/constant";



export class CheckCountryHostClass extends BaseChecked{
    private  _linkImage : string;
    private  ip : string;

    constructor() {
        super();
        this.ip = '';
        this._linkImage = '';

    }


    getLinkImage(): string {
        return this._linkImage;
    }

    private handleLinkImgFromLocalStorage(gateWayUrl : string, valueReplace ?: string){
        let value =  localStorage.getItem(gateWayUrl) ;
        if(valueReplace) {
            if (valueReplace !== JSON.parse(value as string)) {
                localStorage.setItem(gateWayUrl, JSON.stringify(valueReplace));
                value = valueReplace
            }
        }
        return value ? JSON.parse(value as string) : '';
    }

    async onCheck({ gateWayUrl, typeCheck, cid }: propsOnCheck ) {
        if (!gateWayUrl || !typeCheck) {
            this._linkImage = '';
            return;
        } else {
            try {
                this._linkImage = this.handleLinkImgFromLocalStorage(gateWayUrl);
                if (this._linkImage === '') {
                    await this.getIpFromDNS(gateWayUrl);
                }
            } catch (error) {

            }
        }
        this.setIsLoading(true)
    }
    private async getIpFromDNS(gateWayUrl : string){
        const url = dnsGoogle.replace( 'hostname', gateWayUrl);
        const ArrAnswer = (await axios.get(url)).data.Answer;
        for(let i = 0; i < ArrAnswer.length && this.ip === ''; i++){
            if(ArrAnswer[i].type === 1){
                this.ip = ArrAnswer[i].data;
            }
        }
        if(this.ip !== '' && this.ip){
            const geoipResponse = await lookup('https://ipfs.io', this.ip)
            if(geoipResponse.country_code){
                this._linkImage = imgCountryHostName.replace('Location', geoipResponse.country_code.toLocaleLowerCase());
                this.handleLinkImgFromLocalStorage(gateWayUrl, this._linkImage);
            }
        }

    }




}