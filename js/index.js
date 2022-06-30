"use strict";

class Rangevalidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this.from;
  }
  set from(from) {
    if (from <= this.to) {
      throw new RangeError();
    }
    this.from = from;
  }
  get to() {
    return this.to;
  }
  set to(to) {
    if (to >= this.from) {
      throw new RangeError();
    }
    this.to = to;
  }
  get Range() {
    return [this.from, this.to];
  }
  validate(number) {
    if (number >= this._from && number <= this.to) {
      return number;
    }
    throw new RangeError();
  }
}
