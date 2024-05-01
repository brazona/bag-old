import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { coreGuard } from './core/guards/core.guard';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [

  { path: 'default', component: DefaultComponent },
  { path: 'login', component: LoginComponent  }, 
  { path: 'home', component: HomeComponent,
        canActivate: [coreGuard] 
    },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
