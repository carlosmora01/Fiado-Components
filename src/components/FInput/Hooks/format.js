import parsePhoneNumber from 'libphonenumber-js';
import { AsYouType } from 'libphonenumber-js'


export const getFormatedNumber = (phoneNumber)=>{
    return new AsYouType('MX').input(phoneNumber);
}