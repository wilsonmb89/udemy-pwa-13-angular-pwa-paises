import { PaisComponent } from './pages/pais/pais.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PaisesComponent },
  { path: 'pais/:id', component: PaisComponent },
  { path: '**', component: PaisesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
