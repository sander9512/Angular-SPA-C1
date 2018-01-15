export class ClosingDay {
  private _id: string;
  private _sportsHallId: number;
  private _date: Date;
  private _startTime: Date;
  private _endTime: Date;
  private _description: string;
  private _allDay: boolean;

  get sportsHallId(): number {
    return this._sportsHallId;
  }

  set sportsHallId(value: number) {
    this._sportsHallId = value;
  }

  get id(): string {
    return this._id;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  set id(value: string) {
    this._id = value;
  }

  get allDay(): boolean {
    return this._allDay;
  }

  set allDay(value: boolean) {
    this._allDay = value;
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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
