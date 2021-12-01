import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { CrearColaboradoresComponent } from './pages/crear-colaboradores/crear-colaboradores.component';
import { EditarColaboradorComponent } from './pages/editar-colaborador/editar-colaborador.component';
import { ColaboradoresDetalleComponent } from './pages/colaboradores-detalle/colaboradores-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    CrearColaboradoresComponent,
    EditarColaboradorComponent,
    ColaboradoresDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
