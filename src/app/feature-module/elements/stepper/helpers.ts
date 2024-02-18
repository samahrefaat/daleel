import { environment } from "src/environments/environment";
import { Localization } from "./global.model";


export function getLocalizedValue(val:Localization){
    if(!(val instanceof Object)) return val || ''
    let lang = localStorage.getItem('preferredLanguage') || environment.defaultLang
    return lang=='ar'? val.ar : val.en
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function setMinValue(val: number, min: number){
  if((!val ||val && val < min) ) val = min
  return val
}


