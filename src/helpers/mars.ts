export default class Mars {
  gridMaxX: number;
  gridMaxY: number;
  scentedPositions: unknown[][];

  constructor(gridMaxX: number, gridMaxY: number) {
    if (gridMaxX > 50 || gridMaxX < 0) throw new Error("Invalid maxX");
    if (gridMaxY > 50 || gridMaxY < 0) throw new Error("Invalid maxY");

    this.gridMaxX = gridMaxX;
    this.gridMaxY = gridMaxY;
    this.scentedPositions = [];
  }

  isOffGrid(x: number, y: number) {
    return x > this.gridMaxX || x < 0 || y > this.gridMaxY || y < 0;
  }

  addScented(x: number, y: number) {
    if (this.isOffGrid(x, y)) throw new Error("Invalid coordinates");

    if (typeof this.scentedPositions[x] === "undefined") {
      this.scentedPositions[x] = [];
    }
    this.scentedPositions[x][y] = true;
  }

  isScented(x: number, y: number) {
    if (this.isOffGrid(x, y)) throw new Error("Invalid coordinates");

    if (typeof this.scentedPositions[x] !== "undefined") {
      return typeof this.scentedPositions[x][y] === "boolean";
    }

    return false;
  }
}
