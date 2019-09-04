import {Injectable} from '@angular/core';
import { Coche } from '../formulario/coche';
@Injectable()

export class CocheService {

    public arrayCoches: Array<Coche>
    constructor(){
        this.arrayCoches=[];
    }
    getCoches(){
        return this.arrayCoches;
    }
    addCoche(coche:Coche){
        this.arrayCoches.push(coche);
        return this.arrayCoches;
    }
    removeCoche(index){
        this.arrayCoches.splice(index, 1);
        return this.arrayCoches;
    }
}