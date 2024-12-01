import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePagesComponent
  // },

  {
    path: 'about',
    component: AboutPageComponent
  },

  {
    path: 'contact',
    component: ContactPagesComponent
  },


  {
    path: 'countries',
    loadChildren: () => import ('./countries/countries.module').then( m=> m.CountriesModule)
  },

  {
    path: '**',
    redirectTo: 'countries'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
