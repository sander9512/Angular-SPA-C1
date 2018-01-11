import { Component, OnInit } from '@angular/core';
import {Booking} from '../../shared/models/booking.model';
import {BookingsService} from '../../shared/services/booking.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[];
  subscription: Subscription;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.subscription = this.bookingsService.bookingsChanged
      .subscribe(
        (bookings: Booking[]) => {
          this.bookings = bookings;
        }
      );
    this.bookingsService.getBookings()
      .then(bookings => {
        this.bookings = bookings;
        console.log('Boekingen', this.bookings);
      })
      .catch(error => console.log(error));
  }

}
