"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (from >= this._to) {
      throw new RangeError();
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (to <= this._from) {
      throw new RangeError();
    }
    this._to = to;
  }
  get Range() {
    return [this._from, this._to];
  }
  validate(number) {
    if (number >= this._from && number <= this._to) {
      return number;
    }
    throw new RangeError();
  }
}
const range = new RangeValidator(5,10);
console.log(range.validate(8));
