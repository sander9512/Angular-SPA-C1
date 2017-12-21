import { Component, OnInit } from '@angular/core';
import {Booking} from '../../shared/models/booking.model';
import {BookingsService} from '../../shared/services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.bookings = this.bookingsService.getBookings();
  }

}
