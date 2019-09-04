import {Component} from '@angular/core';

 import {Coche} from './coche'; 

@Component({
    selector : 'fomulario',
    templateUrl : './formulario.component.html'
})

export class FormularioComponent{
    public saludo : string;
    public coche:Coche;

    constructor( ){
        this.coche= new Coche("",0,"","");
        this.saludo = "Hola desde el Componente de formulario";
    }
    onSubmit(){
        console.log(this.coche);
    }
}