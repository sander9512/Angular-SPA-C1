export class OpeningsTime {
  private _id: number;
  private _day: string;
  private _timeOpen: string;
  private _timeClose: string;
  private _description: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get day(): string {
    return this._day;
  }

  set day(value: string) {
    this._day = value;
  }

  get timeOpen(): string {
    return this._timeOpen;
  }

  set timeOpen(value: string) {
    this._timeOpen = value;
  }

  get timeClose(): string {
    return this._timeClose;
  }

  set timeClose(value: string) {
    this._timeClose = value;
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
