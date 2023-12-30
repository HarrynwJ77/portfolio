import type { Url } from "url";
import { getImageUrl } from "./hImageGetUrl";

export function setVars(hElement:Element, hUrl:string) {
    hElement.setAttribute("src", getImageUrl(hUrl));
}
