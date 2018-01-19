export class Staff {
  private _text: string;
  private _id: string;

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
