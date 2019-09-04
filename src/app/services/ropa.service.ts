import {Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    public nombre_prenda:string;
    public arrayPrendas : Array<string>;
    constructor(){
        this.nombre_prenda = "Pantalon Vaquero";
        this.arrayPrendas = ['Camisa Blanca', 'Pantalon de Mezclilla']
    }
    prueba(prenda){
        return prenda;
    }
    getPrendas(){
        return this.arrayPrendas;
    }
    addPrenda(nombre_prenda){
        this.arrayPrendas.push(nombre_prenda);
        return this.getPrendas();
    }
    removePrenda(index){
        this.arrayPrendas.splice(index,1);
        return this.getPrendas();
    }
}