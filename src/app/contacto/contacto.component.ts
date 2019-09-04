import {Component } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';

@Component({
    selector : 'contacto',
    templateUrl : './contacto.component.html'
})

export class ContactoComponent{
    saludo = 'Hola desde Contactos';
    public userId : number ;
    public serviceId : number ;
    constructor(
        private _router : Router,
        private _route : ActivatedRoute
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params)=>{
            this.userId = params['user'];
            this.serviceId = params['idservice'];
        })
        console.log(this.userId);
        console.log(this.serviceId);
    }
    redirigir(ruta){
        if(ruta == 'Parametros'){
            this._router.navigate(['/contacto','25','234234']);
        }else{
            this._router.navigate(['/home']);
        }
        
    }
}