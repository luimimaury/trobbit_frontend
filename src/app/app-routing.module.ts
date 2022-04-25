import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { CreateCatComponent } from './components/create-cat/create-cat.component';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'imagenes',
    component: ImagesComponent
  },
  {
    path: 'gatos',
    component: CatsComponent
  },
  {
    path: 'crear',
    component: CreateCatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
