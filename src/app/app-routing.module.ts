import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SportsHall } from './shared/models/sportshall.model';
import { Booking } from './shared/models/booking.model';
import {SportshallsComponent} from './sportshalls/sportshalls.component';
import {BookingsComponent} from './bookings/bookings.component';
import {SportshallDetailComponent} from './sportshalls/sportshall-detail/sportshall-detail.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {BookingListComponent} from './bookings/booking-list/booking-list.component';
import {BookingDetailComponent} from './bookings/booking-detail/booking-detail.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {MaintenanceNewComponent} from './maintenance/maintenance-new/maintenance-new.component';
import {ClosingTimeComponent} from './closing-time/closing-time.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sportshalls', pathMatch: 'full' },
  { path: 'halls/:id', component: SportshallDetailComponent},
  { path: 'halls/:id/new-maintenance', component: MaintenanceNewComponent},
  { path: 'maintenance', component: MaintenanceComponent},
  { path: 'halls/:id/new-closingtime', component: ClosingTimeComponent},
  { path: 'sportshalls', component: SportshallsComponent, children: []},
  { path: 'bookings', component: BookingsComponent, children: [
    { path: '', component: BookingListComponent },
    { path: ':id', component: BookingDetailComponent }
  ]},
  { path: 'login', component: SigninComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
