import {User} from './user.model';

export class WorkDay {
  private __id: string;
  private _userId: string;
  private _hallID: number;
  private _text: string;
  private _startTime: Date;
  private _endTime: Date;

  constructor(userID: string, hallID: number, text: string, start: Date, end: Date) {
    this.userId = userID;
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
  get _id(): string {
    return this.__id;
  }

  set _id(value: string) {
    this.__id = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
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
