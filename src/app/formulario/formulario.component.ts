import {Component} from '@angular/core';
import {Coche} from './coche'; 
import {CocheService} from '../services/coche.service';

@Component({
    selector : 'fomulario',
    templateUrl : './formulario.component.html',
    providers : [CocheService]
})

export class FormularioComponent{
    public saludo : string;
    public coche:Coche;
    public listaCoches: Array<Coche>
    private _cocheService = new CocheService();

    constructor(){
        this.coche= new Coche("",0,"","");
        this.saludo = "Hola desde el Componente de formulario";
        this.listaCoches = [];
    }
    
    onSubmit(){
        this.listaCoches=this._cocheService.addCoche(this.coche);
    } 
    removeCoche(index){
        if(confirm("Esta seguro que desea eliminar "+this.listaCoches[index].nombre)){
            this.listaCoches = this._cocheService.removeCoche(index);
        }   
    }
    
}