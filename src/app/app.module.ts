import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { SportshallsComponent } from './sportshalls/sportshalls.component';
import { SportshallListComponent } from './sportshalls/sportshall-list/sportshall-list.component';
import { SportshallItemComponent } from './sportshalls/sportshall-list/sportshall-item/sportshall-item.component';
import {SportsHallsService} from './shared/services/sportshall.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingItemComponent } from './bookings/booking-list/booking-item/booking-item.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AppRoutingModule} from './app-routing.module';
import {BookingsService} from './shared/services/booking.service';
import {UserService} from './shared/services/user.service';
import { SportshallDetailComponent } from './sportshalls/sportshall-detail/sportshall-detail.component';
import { SportshallTimeItemComponent } from './sportshalls/sportshall-time-item/sportshall-time-item.component';
import { BookingItemSmallComponent } from './bookings/booking-item-small/booking-item-small.component';
import { BookingDetailComponent } from './bookings/booking-detail/booking-detail.component';
import {ProprietorService} from './shared/services/proprietor.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { MaintenanceItemComponent } from './maintenance/maintenance-list/maintenance-item/maintenance-item.component';
import {MaintenanceService} from './shared/services/maintenance.service';
import {ClosingDayService} from './shared/services/closingday.service';
import { MaintenanceNewComponent } from './maintenance/maintenance-new/maintenance-new.component';
import { EditTimesComponent } from './edit-times/edit-times.component';
import { ClosingTimeComponent } from './closing-time/closing-time.component';
import { SportshallScheduleComponent } from './sportshalls/sportshall-schedule/sportshall-schedule.component';
import {DxSchedulerModule} from 'devextreme-angular';
import {TimesService} from './shared/services/times.service';
import { ClosingTimeItemComponent } from './closing-time/closing-time-item/closing-time-item.component';
import { ScheduleComponent } from './staff-schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    FooterComponent,
    SportshallsComponent,
    SportshallListComponent,
    SportshallItemComponent,
    BookingsComponent,
    BookingListComponent,
    BookingItemComponent,
    SignupComponent,
    SigninComponent,
    SportshallDetailComponent,
    SportshallTimeItemComponent,
    BookingItemSmallComponent,
    BookingDetailComponent,
    MaintenanceComponent,
    MaintenanceListComponent,
    MaintenanceItemComponent,
    MaintenanceNewComponent,
    EditTimesComponent,
    ClosingTimeComponent,
    SportshallScheduleComponent,
    ClosingTimeItemComponent,
    ScheduleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    DxSchedulerModule
  ],
  providers: [SportsHallsService, BookingsService, UserService, ProprietorService,
    MaintenanceService, ClosingDayService, TimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
