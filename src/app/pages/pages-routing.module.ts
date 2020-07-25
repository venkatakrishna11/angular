import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DocumentModule } from './document/document.module';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path: 'register',
      loadChildren: () => import('./register/register.module').then(item => item.RegisterModule),
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(item => item.LoginModule)
    },
    {
      path: 'user-details',
      loadChildren: () => import('./user-details/user-details.module').then(item => item.UserDetailsModule)
    },
    {
      path: 'document',
      loadChildren: () => import('./document/document.module').then(item => item.DocumentModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
