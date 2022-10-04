import Mars from "./mars.js";

const INSTRUCTION = {
  FORWARD: "F",
  LEFT: "L",
  RIGHT: "R",
};

const ORIENTATION = {
  NORTH: "N",
  EAST: "E",
  SOUTH: "S",
  WEST: "W",
};

function rotate(orientation: string, left: boolean) {
  const orientations = Object.values(ORIENTATION);

  if (left) orientations.reverse();

  const nextIndex = orientations.indexOf(orientation) + 1;
  return orientations[nextIndex % orientations.length];
}

function moveForward(x: number, y: number, orientation: string) {
  switch (orientation) {
    case ORIENTATION.NORTH:
      y++;
      break;
    case ORIENTATION.EAST:
      x++;
      break;
    case ORIENTATION.SOUTH:
      y--;
      break;
    case ORIENTATION.WEST:
      x--;
      break;
    default:
      throw new Error("Invalid orientation");
  }
  return { x, y };
}

class Robot {
  isLost: boolean;
  x: number;
  y: number;
  orientation: string;
  mars: Mars;

  constructor(x: number, y: number, orientation: string, mars: Mars) {
    if (mars.isOffGrid(x, y)) throw new Error("Invalid coordinates");

    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.mars = mars;
    this.isLost = false;
  }

  move(instruction: string) {
    if (this.isLost) return;

    switch (instruction) {
      case INSTRUCTION.FORWARD:
        const { x: newX, y: newY } = moveForward(
          this.x,
          this.y,
          this.orientation
        );

        if (this.mars.isOffGrid(newX, newY)) {
          if (!this.mars.isScented(this.x, this.y)) {
            this.isLost = true;
            this.mars.addScented(this.x, this.y);
          }
        } else {
          this.x = newX;
          this.y = newY;
        }
        break;
      case INSTRUCTION.LEFT:
        this.orientation = rotate(this.orientation, true);
        break;
      case INSTRUCTION.RIGHT:
        this.orientation = rotate(this.orientation, false);
        break;
      default:
        throw new Error("Invalid instruction.");
    }
  }

  static get INSTRUCTION() {
    return INSTRUCTION;
  }

  static get ORIENTATION() {
    return ORIENTATION;
  }

  toString() {
    return `${this.x} ${this.y} ${this.orientation}${
      this.isLost ? " LOST" : ""
    }`;
  }
}

export default Robot;
