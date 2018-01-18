import {User} from './user.model';

export class WorkDay {
  private _id: string;
  private _userID: string;
  private _text: string;
  private _startDate: Date;
  private _endDate: Date;

  constructor(userID: string, text: string, start: Date, end: Date) {
    this.userID = userID;
    this.text = text;
    this.startDate = start;
    this.endDate = end;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }


  get userID(): string {
    return this._userID;
  }

  set userID(value: string) {
    this._userID = value;
  }
  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }
}
