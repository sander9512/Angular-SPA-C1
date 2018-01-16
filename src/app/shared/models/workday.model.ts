import {User} from './user.model';

export class WorkDay {
  private _id: string;
  private _user: User;
  private _startTime: Date;
  private _endTime: Date;
  private _date: Date;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
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

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
