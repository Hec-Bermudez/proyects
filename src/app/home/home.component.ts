import {Component } from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    providers : [RopaService]
})

export class HomeComponent{
    public saludo = "Estas viendo el Home";
    public listaPrendas : Array<string>
    public nuevaPrenda :string;
    public fecha : Date;

    constructor(
        private _ropaService : RopaService
    ){
        this.fecha= new Date();
    }

    ngOnInit(){
        this.listaPrendas = this._ropaService.getPrendas();
        
    }
    addPrenda(){
        if(this.nuevaPrenda){
            this.listaPrendas=this._ropaService.addPrenda(this.nuevaPrenda);
            this.nuevaPrenda = "";
        }
        
    }
    removePrenda(index){
        if(confirm( "Esta seguro que desea eliminar "+ this.listaPrendas[index])){
            this.listaPrendas = this._ropaService.removePrenda(index);
        }
        
        
    }
}