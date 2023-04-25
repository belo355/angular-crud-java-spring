import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CursoFormularioComponent } from './cursos/curso-formulario/curso-formulario.component';

const routes: Routes = [
  { path: '', component: CursosComponent},
  { path: 'novo', component: CursoFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
