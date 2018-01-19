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
import {EditTimesComponent} from './edit-times/edit-times.component';
import {SportshallScheduleComponent} from './sportshalls/sportshall-schedule/sportshall-schedule.component';
import {ScheduleComponent} from './staff-schedule/schedule.component';
import {PersonalScheduleComponent} from './staff-schedule/personal-schedule/personal-schedule.component';

import {OnlyLoggedInUsersGuard} from './shared/guards/logged-in.guard';
import {OnlyStaffGuard} from './shared/guards/staff.guard';
import {OnlyProprietorsGuard} from './shared/guards/proprietor.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'halls/:id', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: SportshallDetailComponent},
  { path: 'halls/:id/schedule', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: SportshallScheduleComponent},
  { path: 'halls/:id/maintenance', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: MaintenanceComponent},
  { path: 'halls/:id/maintenance/new', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: MaintenanceNewComponent},
  { path: 'halls/:id/edit-times', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: EditTimesComponent },
  { path: 'halls/:id/new-closingtime', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: ClosingTimeComponent},
  { path: 'sportshalls', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: SportshallsComponent, children: []},
  { path: 'bookings', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: BookingsComponent, children: [
    { path: '', component: BookingListComponent },
    { path: ':id', component: BookingDetailComponent }
  ]},
  { path: 'halls/:id/staff/schedule', canActivate: [OnlyLoggedInUsersGuard, OnlyProprietorsGuard], component: ScheduleComponent },
  { path: 'my-schedule', canActivate: [OnlyLoggedInUsersGuard, OnlyStaffGuard], component: PersonalScheduleComponent },
  { path: 'login', component: SigninComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
