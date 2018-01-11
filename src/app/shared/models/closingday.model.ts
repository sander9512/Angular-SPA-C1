export class ClosingDay {
  private _sportsHallId: number;
  private _startTime: Date;
  private _endTime: Date;
  private _description: string;

  get sportsHallId(): number {
    return this._sportsHallId;
  }

  set sportsHallId(value: number) {
    this._sportsHallId = value;
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
