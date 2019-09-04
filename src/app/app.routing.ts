import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {EmpleadosComponent} from './empleados/empleados.component';
import {FrutaComponent} from './fruta/fruta.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import { FormularioComponent } from '../app/formulario/formulario.component';

const appRoutes : Routes =[
    {path : '' , component : HomeComponent},
    {path : 'frutas', component : FrutaComponent},
    {path : 'empleados', component : EmpleadosComponent},
    {path : 'home', component : HomeComponent},
    {path : 'contacto', component : ContactoComponent},
    {path : 'contacto/:user/:idservice', component : ContactoComponent},
    {path : 'formulario' , component : FormularioComponent},
    {path : '**' , component : HomeComponent}
    
];

export const appRoutingProviders:any[]=[];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);