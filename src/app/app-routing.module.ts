import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SportsHall } from './shared/models/sportshall.model';
import { Booking } from './shared/models/booking.model';
import {SportshallsComponent} from './sportshalls/sportshalls.component';
import {BookingsComponent} from './bookings/bookings.component';
import {SportshallDetailComponent} from './sportshalls/sportshall-detail/sportshall-detail.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sportshalls', pathMatch: 'full' },
  { path: 'halls/:id', component: SportshallDetailComponent},
  { path: 'maintenance', component: MaintenanceComponent},
  { path: 'sportshalls', component: SportshallsComponent, children: []},
  { path: 'bookings', component: BookingsComponent, children: []},
  { path: 'login', component: SigninComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
