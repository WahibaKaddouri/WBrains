import { FormControl } from '@angular/forms';
 
export class GlycemieValidator {
 
    static isValid(control: FormControl): any {
 
        if(isNaN(control.value)){
            return {
                "notANumber": true
            };
        }
 
        if(control.value < 0){
            return {
                "negativeValue": true
            };
        }

        if(control.value == 0){
            return {
                "nullValue": true
            };
        }
 
        if(control.value < 0.18){
            return {
                "tooSmallValue": true
            };
        }
 
        if (control.value > 7.2){
            return {
                "tooBigValue": true
            };
        }
 
        return null;
    }
 
}