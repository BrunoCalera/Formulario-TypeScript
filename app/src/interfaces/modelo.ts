import { Imrpimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imrpimivel, Comparavel<T> {

}