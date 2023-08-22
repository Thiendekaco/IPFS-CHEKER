import axios, {AxiosError} from "axios";
import { checkUrlInterface, propsOnCheck } from "../types";




export abstract class BaseChecked {
    private isLoading :boolean;
    protected urlNFT : string  ;
    protected statusCodeUrlNFT : checkUrlInterface = {status : 0};
    public  static  statusCode : number;
    public  static  gatewayArr : number = 0;
    public  static  gatewayArrIndex0 : string = '';
    protected constructor() {
        this.isLoading = true;
        this.urlNFT = ''
    }

    abstract  onCheck({ gateWayUrl , typeCheck, cid } : propsOnCheck) : Promise<void>;

    public getIsLoading(): boolean {
        return this.isLoading;
    }

    public setIsLoading(value: boolean) {
        this.isLoading = value;
    }

    public async getResponseNFT(UrlCheckNFT : string ){
        try {
            const response =   await axios.get(UrlCheckNFT);
            this.statusCodeUrlNFT = { data : response.data, status: response.status};
        }catch (error){
            const message = ( error as AxiosError);
            BaseChecked.statusCode = message.request.status;
        }

    }

    public setAll (isLoading: boolean, onError : boolean, onPass : boolean){
        this.isLoading = isLoading;
    }


}