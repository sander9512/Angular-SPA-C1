export class Maintenance {
  private _sportsHallId: number;
  private _maintenanceType: string;
  private _maintenanceObject: string;
  private _startTime: Date;
  private _endTime: Date;
  private _description: string;

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
