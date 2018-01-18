export class WorkdaySchedule {
  private _text: string;
  private _userID: string;
  private _startDate: Date;
  private _endDate: Date;


  constructor(text: string, userID: string, startDate: Date, endDate: Date) {
    this._text = text;
    this._userID = userID;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get userID(): string {
    return this._userID;
  }

  set userID(value: string) {
    this._userID = value;
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
