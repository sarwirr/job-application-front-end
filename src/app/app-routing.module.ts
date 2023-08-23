import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobDashboardComponent } from './job-dashboard/job-dashboard.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StaySignedInGuard } from './stay-signed-in.guard';
import { IsSignedInGuard } from './is-signed-in.guard';
import { AdminGuardGuard } from './admin.guard';
import { ProfileComponent } from './profile/profile.component';
import { CompanylistComponent } from './companylist/companylist.component';

const routes: Routes = [
  { path: '', component : HomeComponent , canActivate : [StaySignedInGuard]},
  { path: 'login', component: LoginComponent, canActivate : [StaySignedInGuard]},
  { path: 'registration', component: RegistrationComponent, canActivate : [StaySignedInGuard]},
  { path: 'jobdashboard', component: JobDashboardComponent ,canActivate: [IsSignedInGuard ]
},
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuardGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [IsSignedInGuard]},
  {path: 'companylist', component: CompanylistComponent, canActivate: [IsSignedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsSignedInGuard]
})
export class AppRoutingModule { }
