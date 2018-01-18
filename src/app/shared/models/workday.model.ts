import {User} from './user.model';

export class WorkDay {
  private _id: string;
  private _userID: string;
  private _hallID: number;
  private _text: string;
  private _startTime: Date;
  private _endTime: Date;

  constructor(userID: string, hallID: number, text: string, start: Date, end: Date) {
    this.userID = userID;
    this.hallID = hallID;
    this.text = text;
    this.startTime = start;
    this.endTime = end;
  }

  get hallID(): number {
    return this._hallID;
  }

  set hallID(value: number) {
    this._hallID = value;
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
}
