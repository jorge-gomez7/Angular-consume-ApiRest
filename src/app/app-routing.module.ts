import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { CrearColaboradoresComponent } from './pages/crear-colaboradores/crear-colaboradores.component';
import { EditarColaboradorComponent } from './pages/editar-colaborador/editar-colaborador.component';
import { ColaboradoresDetalleComponent } from './pages/colaboradores-detalle/colaboradores-detalle.component';

const routes: Routes = [
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'crear-colaboradores', component: CrearColaboradoresComponent },
  { path: 'editar-colaborador/:id', component: EditarColaboradorComponent },
  { path: 'detalle/:id', component: ColaboradoresDetalleComponent },
  { path: '', redirectTo: '/colaboradores', pathMatch: 'full' },
  { path: '**', redirectTo: '/colaboradores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
