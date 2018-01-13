import {Time} from '@angular/common';

export class Maintenance {
  private _sportsHallId: number;
  private _maintenanceType: string;
  private _maintenanceObject: string;
  private _date: Date;
  private _startTime: Time;
  private _endTime: Time;
  private _description: string;


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get sportsHallId(): number {
    return this._sportsHallId;
  }

  set sportsHallId(value: number) {
    this._sportsHallId = value;
  }

  get maintenanceType(): string {
    return this._maintenanceType;
  }

  set maintenanceType(value: string) {
    this._maintenanceType = value;
  }

  get maintenanceObject(): string {
    return this._maintenanceObject;
  }

  set maintenanceObject(value: string) {
    this._maintenanceObject = value;
  }
  get startTime(): Time {
    return this._startTime;
  }

  set startTime(value: Time) {
    this._startTime = value;
  }

  get endTime(): Time {
    return this._endTime;
  }

  set endTime(value: Time) {
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
