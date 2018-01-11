import { Booking } from '../models/booking.model';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Http, Headers} from '@angular/http';


@Injectable()
export class BookingsService {
  bookingsChanged = new Subject<Booking[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/bookings'; // URL to web api
  private bookings: Booking[];
  // private bookings: Booking[] = [
  //   new Booking(
  //     'Sporty Times',
  //     'Mr. De Groot',
  //     '05-01-2018',
  //     'Volleyball',
  //     '5',
  //     '3',
  //     '15:00',
  //     '19:00'
  //   ),
  //   new Booking(
  //     'Time2Bfit',
  //     'Mrs. Guthrie',
  //     '04-02-2018',
  //     'Basketball',
  //     '7',
  //     '5',
  //     '12:00',
  //     '17:00'
  //   ),
  //   new Booking(
  //     'RIP fat',
  //     'Mr. Flint',
  //     '13-02-2018',
  //     'Badminton',
  //     '3',
  //     '8',
  //     '13:00',
  //     '16:00'
  //   )
  // ];
  constructor(private http: Http) {
  }

  getBookings(): Promise<Booking[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.bookings = response.json() as Booking[];
        return this.bookings;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  getBookingsWithHall(hallID: number): Promise<Booking[]> {
    return this.http.get(this.serverUrl + '/hall/' + hallID, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.bookings = response.json() as Booking[];
        return this.bookings;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  getBooking(id: number): Promise<Booking> {
    console.log('id', id);
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json() as Booking;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }
}
