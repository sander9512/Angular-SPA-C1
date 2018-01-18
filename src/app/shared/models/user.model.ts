export class User {

  private __id: any;
  private _name: string;
  private _email: string;
  private _password: string;
  private _role: string;
  private _propID: number;
  private _hallID?: number;

  get _id(): any{
    return this.__id;
  }

  set _id(value: any) {
    this.__id = value;
  }

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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get hallID(): number {
    return this._hallID;
  }

  set hallID(value: number) {
    this._hallID = value;
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
