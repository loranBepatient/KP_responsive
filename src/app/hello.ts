class Hello {
  private _value;
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }

  logger(value) {
    console.log("my logger", value);
  }
}

export default Hello;
