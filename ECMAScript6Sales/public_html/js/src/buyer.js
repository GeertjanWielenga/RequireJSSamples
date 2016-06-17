/**
 * Buyer for obtaining Thing
 * for an authenticated name.
 * @param {type} name
 * @returns {undefined}
 */
import { verifyName } from './authenticator';
import { sendThing } from './thing';
import { sendApology } from './thing';

export function buyThing(name) {
    console.log(name + " is trying to buy");
    var verified = verifyName(name);
    if(verified){
        sendThing(name);
    } else {
        sendApology(name);
    }
    return verified;
}