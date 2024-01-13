import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { coreGuard } from './core/guards/core.guard';

const routes: Routes = [

  { path: 'default', component: DefaultComponent },
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
