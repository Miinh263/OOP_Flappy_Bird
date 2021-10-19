export class Bird {
  private x: number;
  private y: number;
  private status: string; // status : live/died
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
  public getStatus(): string {
    return this.status;
  }
  public setStatus(value: string) {
    this.status = value;
  }
  constructor(x: number, y: number, status: string) {
    this.x = x;
    this.y = y;
    this.status = status;
  }

  //bay lên
  flyUp(a: number): void {
    this.y -= a;
  }
  //rơi xuống
  fall(a: number): void {
    this.y += a;
  }
}
