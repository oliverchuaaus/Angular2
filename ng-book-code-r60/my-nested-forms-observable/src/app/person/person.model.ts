import {Address} from '../address/address.model';

export interface Person {
    id:string;
    name: string;
    addresses: Address[];
}