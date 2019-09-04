import {Component} from '@angular/core';
import {Empleado} from  './empleado';

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
})

export class  EmpleadosComponent {
    public empleados= "Componente empleados";
    public empleado : Empleado;
    public trabajadores : Array<Empleado>;
    public trabajador_externo : boolean;
    public color : string;
    public color_seleccionado : string;

    ngOnInit(){
        this.empleado = new Empleado('Alejandro Bermudez',1, 'Jefe', true);
        this.trabajadores=[
            new Empleado('Hector Bermudez',28, 'Jefe', true),
            new Empleado('Alejandro Bermudez',1, 'Gerente', true),
            new Empleado('Maricarmen Mendoza',22, 'Secretaria', true),
            new Empleado('Armando Bermudez',28, 'Chalán', true)
        ];
        this.trabajador_externo = true;
        console.log(this.empleado);
        this.color="red";
        this.color_seleccionado= "#ccc";
    }
    cambiaEmpleado(valor){
        this.trabajador_externo=valor;
    }
}