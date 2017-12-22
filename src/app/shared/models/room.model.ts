export class Room {
  private _id: number;
  private _roomNumber: string;
  private _capacity: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get roomNumber(): string {
    return this._roomNumber;
  }

  set roomNumber(value: string) {
    this._roomNumber = value;
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
