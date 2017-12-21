import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SportsHall } from './shared/models/sportshall.model';
import { Booking } from './shared/models/booking.model';
import {SportshallsComponent} from './sportshalls/sportshalls.component';
import {BookingsComponent} from './bookings/bookings.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sportshalls', pathMatch: 'full' },
  { path: 'sportshalls', component: SportshallsComponent, children: []},
  { path: 'bookings', component: BookingsComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
