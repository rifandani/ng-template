import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from '@pages/not-found/not-found.page';
import { HomePageComponent } from '@pages/home/home.page';

const routes: Routes = [
  // { path: 'deprecated', redirectTo: '/updated-page', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }, // Wildcard route for a 404 page
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
