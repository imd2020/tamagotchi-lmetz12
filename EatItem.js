export default class EatItem {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.eat = false;
  }

  display() {
    this.eatItem();
  }

  //draw carrot
  eatItem() {
    let xItem = 90 * this.s;
    let yItem = 50 * this.s;

    if (this.eat === true) {
      stroke(255, 140, 0);
      fill(255, 140, 0);
      rect(this.x, this.y, xItem, yItem);
      rect(
        this.x - 20 * this.s,
        this.y + 30 * this.s,
        xItem + 40 * this.s,
        yItem + 20 * this.s
      );
      rect(this.x, this.y + 80 * this.s, xItem, yItem + 20 * this.s);
      rect(
        this.x + 20 * this.s,
        this.y + 120 * this.s,
        xItem - 40 * this.s,
        yItem + 20 * this.s
      );

      stroke(0, 128, 0);
      fill(0, 128, 0);
      rect(
        this.x + 25 * this.s,
        this.y - 50 * this.s,
        xItem - 50 * this.s,
        yItem
      );

      rect(
        this.x + 15 * this.s,
        this.y - 50 * this.s,
        xItem - 30 * this.s,
        yItem - 20 * this.s
      );

      rect(this.x, this.y - 70 * this.s, xItem, yItem - 20 * this.s);

      rect(
        this.x + 30 * this.s,
        this.y - 90 * this.s,
        xItem - 70 * this.s,
        yItem
      );

      stroke(160, 82, 54);
      fill(160, 82, 54);
      rect(this.x, this.y, xItem - 70 * this.s, yItem);
      rect(
        this.x - 20 * this.s,
        this.y + 30 * this.s,
        xItem - 70 * this.s,
        yItem + 20 * this.s
      );
      rect(
        this.x,
        this.y + 80 * this.s,
        xItem - 70 * this.s,
        yItem + 20 * this.s
      );
      rect(
        this.x + 20 * this.s,
        this.y + 120 * this.s,
        xItem - 70 * this.s,
        yItem + 20 * this.s
      );

      rect(
        this.x + 30 * this.s,
        this.y + 50 * this.s,
        xItem - 30 * this.s,
        yItem - 35 * this.s
      );

      rect(
        this.x + 30 * this.s,
        this.y + 80 * this.s,
        xItem - 50 * this.s,
        yItem - 35 * this.s
      );
    }
  }
}
