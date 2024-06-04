import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';

const routes: Routes = [
  { path: '', component: CrearPerfilComponent },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'cargar-imagen', component: CrearPerfilComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
