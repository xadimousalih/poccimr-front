import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardGuard]},
  {path: 'adhesion', component: AdhesionComponent, canActivate: [AuthGuardGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
