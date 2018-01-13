export class Room implements MaintenanceObject {
  _id: number;
  _name: string;
  _capacity: number;

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

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
