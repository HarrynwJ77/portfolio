import type { Url } from "url";
import { getImageUrl } from "./commonGetImageUrl";

export function setVars(hElement:Element, hUrl:string) {
    hElement.setAttribute("src", getImageUrl(hUrl));
}
