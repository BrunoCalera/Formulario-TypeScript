import { Imrpimivel } from "./imprimivel.js";

export function imprimir (...objetos: Imrpimivel[]){
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}