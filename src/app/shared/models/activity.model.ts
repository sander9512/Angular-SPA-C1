export class Activity implements MaintenanceObject {
  _id: number;
  _name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
