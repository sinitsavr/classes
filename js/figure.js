"use strict";

class Figure3D {
  costructor(name) {
    this.name = name;
  }
  getVolume() {
    return null;
  }
  static isFigura3D(obj) {
    return obj instanceof Figure3D;
  }
}
class Ball extends Figure3D {
  constructor(radius) {
    super("Ball");
    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * 3.14 * Math.pow(radius, 3);
  }
}
class Cylindre extends Figure3D {
  constructor(radius, height) {
    super("Cylindre");
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return 3.14 * height * Math.pow(radius, 2);
  }
}

class Cube extends Figure3D {
  constructor(side) {
    super("Cube");
    this.side = side;
  }

  getVolume() {
    return math.pow(side, 3);
  }
}
