import {Activity} from './activity.model';
import {Room} from './room.model';
import {SportsHall} from './sportshall.model';

export class Booking {
  private _id: number;
  private _sportsHall: SportsHall;
  private _customerName: string;
  private _date: Date;
  private _activity: Activity;
  private _room: Room;
  private _startTime: Date;
  private _endTime: Date;

  //
  // constructor (sportsHallName: string, customerName: string, dateTime: string, activity: string, room: string,
  //              remainingCapacity: string, startTime: string, endTime: string) {
  //   this.sportsHallName = sportsHallName;
  //   this.customerName = customerName;
  //   this.dateTime = dateTime;
  //   this.activity = activity;
  //   this.room = room;
  //   this.remainingCapacity = remainingCapacity;
  //   this.startTime = startTime;
  //   this.endTime = endTime;
  // }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get sportsHall(): SportsHall {
    return this._sportsHall;
  }

  set sportsHall(value: SportsHall) {
    this._sportsHall = value;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get activity(): Activity {
    return this._activity;
  }

  set activity(value: Activity) {
    this._activity = value;
  }

  get room(): Room {
    return this._room;
  }

  set room(value: Room) {
    this._room = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
    this._endTime = value;
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
