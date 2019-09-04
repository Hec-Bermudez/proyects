import {Component} from '@angular/core';
import {Coche} from './coche';

@Component({
    selector : 'coche',
    templateUrl:'./coche.component.html'
})

export class CocheComponent{
    public saludo : string;
    public coche :Coche;
    public nombre : string;

    constructor(){
        this.saludo = "Hola desde Formulario";
        this.nombre = "";
        this.coche = new Coche("","","");
    }
    onSubmit(){
        console.log(this.coche);
    }
}