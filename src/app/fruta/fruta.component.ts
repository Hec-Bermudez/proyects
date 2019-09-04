import {Component} from '@angular/core';

@Component({
    selector:'app-fruta',
    templateUrl:'./fruta.component.html',
    styleUrls: ['./fruta.component.css']
})

export class FrutaComponent {
    public nombre_componente :string ;
    public listado_frutas :string ;
    public nombre:string;

    public arreglo:Array<string>;

    constructor(){
        /* Para inicializar variables */
        this.nombre_componente="Componente de fruteishons";
        this.listado_frutas="Fruta1, Fruta2, Fruta3";
        this.nombre="Hetorito";
        this.arreglo=["Unoo", 'Dos', 'Tres'];
        
        console.log(this.arreglo);
    }
    holaMundo(){
        
        alert("Hola "+this.nombre);
    }
    ngOnInit(){
        /* Es el Primer Metodo que se ejecuta despues del constructor 
        y se utiliza para lanzar servicios u otros metodos*/
        //this.holaMundo();

        //Variables y Alcance
        /* var variable global */
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            /* let solo le asigna el valor dentro del if */
            let uno = 3;
            var dos = 88;
            console.log("Dentro de If"+ uno);
        }
        console.log("Dentro de If"+ uno);

    }
}