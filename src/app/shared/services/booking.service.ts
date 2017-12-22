import { Booking } from '../models/booking.model';
import { Injectable } from '@angular/core';


@Injectable()
export class BookingsService {
  private bookings: Booking[] = [
    new Booking(
      'Sporty Times',
      'Mr. De Groot',
      '05-01-2018',
      'Volleyball',
      '5',
      '3',
      '15:00',
      '19:00'
    ),
    new Booking(
      'Time2Bfit',
      'Mrs. Guthrie',
      '04-02-2018',
      'Basketball',
      '7',
      '5',
      '12:00',
      '17:00'
    ),
    new Booking(
      'RIP fat',
      'Mr. Flint',
      '13-02-2018',
      'Badminton',
      '3',
      '8',
      '13:00',
      '16:00'
    )
  ];

  getBookings() {
    return this.bookings.slice();
  }

  getBooking(index: number) {
    return this.bookings[index];
  }
}
