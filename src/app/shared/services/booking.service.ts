import { Booking } from '../models/booking.model';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Http, Headers} from '@angular/http';
import {ScheduleItem} from '../models/ScheduleItem';


@Injectable()
export class BookingsService {
  bookingsChanged = new Subject<Booking[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/bookings'; // URL to web api
  private bookings: Booking[];
  private items: ScheduleItem[] = new Array<ScheduleItem>();

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
  getTodaysBookings(id: number): Promise<Booking[]> {
    console.log('id', id);
    return this.http.get(this.serverUrl + '/date/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        this.bookings = response.json() as Booking[];
        return this.bookings;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }
  createScheduleData(bookings: Booking[]): ScheduleItem[] {
    this.items.length = 0;
    for (let i of bookings) {
      const start = i.startTime.toString();
      const startDate = new Date(start);
      const end = i.endTime.toString();
      const endDate = new Date(end);
      const item = new ScheduleItem(i.activity.name, i.room.roomNumber, startDate, endDate);
      this.items.push(item);
    }
    console.log(this.items);
    return this.items;
  }
}
