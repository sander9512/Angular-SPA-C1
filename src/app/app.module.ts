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
import {FormsModule} from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingItemComponent } from './bookings/booking-list/booking-item/booking-item.component';
import {AppRoutingModule} from './app-routing.module';
import {BookingsService} from './shared/services/booking.service';
import { SportshallDetailComponent } from './sportshalls/sportshall-detail/sportshall-detail.component';

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
    SportshallDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SportsHallsService, BookingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
