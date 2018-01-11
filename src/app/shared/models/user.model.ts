export class User {

  private _email: string;
  private _password: string;
  private _role: string;
  private _propID: number;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }


  get propID(): number {
    return this._propID;
  }

  set propID(value: number) {
    this._propID = value;
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
