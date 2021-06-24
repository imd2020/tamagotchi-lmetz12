export default class SleepItem {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    this.sleepItem();
  }

  //draw sleep item
  sleepItem() {
    if (sleep === true) {
      if (colorState === "blue") {
        stroke(135, 206, 235);
        fill(135, 206, 235);
      } else if (colorState === "pink") {
        stroke(218, 112, 214);
        fill(218, 112, 214);
      } else if (colorState === "grey") {
        stroke(128, 128, 128);
        fill(128, 128, 128);
      }

      let xSleep = 20;
      let ySleep = 20;

      rect(this.x - 10 * this.s, this.y, xSleep + 60 * this.s, ySleep * this.s);
      rect(
        this.x + 50 * this.s,
        this.y + 20 * this.s,
        xSleep * this.s,
        ySleep * this.s
      );
      rect(
        this.x + 30 * this.s,
        this.y + 40 * this.s,
        xSleep * this.s,
        ySleep * this.s
      );
      rect(
        this.x + 10 * this.s,
        this.y + 60 * this.s,
        xSleep * this.s,
        ySleep * this.s
      );
      rect(
        this.x - 10 * this.s,
        this.y + 80 * this.s,
        xSleep + 60 * this.s,
        ySleep * this.s
      );
    }
  }
}
