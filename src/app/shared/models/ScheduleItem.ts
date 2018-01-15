export class ScheduleItem {
  private _text: string;
  private _roomNumber: string;
  private _startDate: Date;
  private _endDate: Date;

  constructor(activity: string, room: string, startDate: Date, endDate: Date) {
    this.text = activity;
    this.roomNumber = room;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get roomNumber(): string {
    return this._roomNumber;
  }

  set roomNumber(value: string) {
    this._roomNumber = value;
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
