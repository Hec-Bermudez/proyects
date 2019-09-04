import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { FrutaComponent } from '../app/fruta/fruta.component';
import { EmpleadosComponent } from '../app/empleados/empleados.component';
import { HomeComponent } from '../app/home/home.component';
import { ContactoComponent } from '../app/contacto/contacto.component';
import { FormularioComponent } from '../app/formulario/formulario.component';
import {CocheComponent} from './coche/coche.component';

import {ConversorPipe} from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FrutaComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    FormularioComponent,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
