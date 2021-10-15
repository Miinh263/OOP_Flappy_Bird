export class Pipe {
  private x: number;
  private y: number;
  public getX(): number {
    return this.x;
  }
  public setX(value: number) {
    this.x = value;
  }
  public getY(): number {
    return this.y;
  }
  public setY(value: number) {
    this.y = value;
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  //di chuyển cột
  move() {
    this.x -= 5;
  }
}
