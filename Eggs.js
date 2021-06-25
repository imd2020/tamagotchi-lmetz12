export default class Egg {
  constructor(x, y, s, r, g, b) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display() {
    push();
    translate(this.x, this.y);

    this.drawEgg();
    this.drawDetails();
    this.fillColor();

    pop();
  }

  //contour egg
  drawEgg() {
    let xEgg = 20 * this.s;
    let yEgg = 20 * this.s;

    noStroke();
    fill(0, 0, 0);

    rect(this.x, this.y, xEgg, yEgg);
    rect(this.x + 20 * this.s, this.y - 20 * this.s, xEgg, yEgg);
    rect(this.x + 40 * this.s, this.y - 40 * this.s, xEgg + 40 * this.s, yEgg);
    rect(this.x + 100 * this.s, this.y - 20 * this.s, xEgg, yEgg);
    rect(this.x + 120 * this.s, this.y, xEgg, yEgg);
    rect(this.x + 140 * this.s, this.y + 20 * this.s, xEgg, yEgg + 20 * this.s);
    rect(this.x + 160 * this.s, this.y + 60 * this.s, xEgg, yEgg + 40 * this.s);
    rect(this.x + 140 * this.s, this.y + 120 * this.s, xEgg, yEgg);
    rect(this.x + 120 * this.s, this.y + 140 * this.s, xEgg, yEgg);
    rect(this.x - 20 * this.s, this.y + 20 * this.s, xEgg, yEgg + 20 * this.s);
    rect(this.x - 40 * this.s, this.y + 60 * this.s, xEgg, yEgg + 40 * this.s);
    rect(this.x - 20 * this.s, this.y + 120 * this.s, xEgg, yEgg);
    rect(this.x, this.y + 140 * this.s, xEgg, yEgg);
    rect(this.x + 20 * this.s, this.y + 160 * this.s, xEgg + 80 * this.s, yEgg);
  }

  //shading egg
  drawDetails() {
    let xEgg = 20 * this.s;
    let yEgg = 20 * this.s;

    noStroke();
    fill(192, 192, 192);

    rect(this.x, this.y + 120 * this.s, xEgg + 20 * this.s, yEgg);
    rect(this.x + 20 * this.s, this.y + 140 * this.s, xEgg, yEgg);
    rect(this.x + 40 * this.s, this.y + 140 * this.s, xEgg + 60 * this.s, yEgg);
    rect(this.x - 20 * this.s, this.y + 60 * this.s, xEgg, yEgg + 40 * this.s);
    rect(this.x, this.y + 20 * this.s, xEgg, yEgg + 20 * this.s);
    rect(this.x + 20 * this.s, this.y, xEgg, yEgg);
    rect(this.x + 40 * this.s, this.y - 20 * this.s, xEgg, yEgg);
  }

  //coloring egg
  fillColor() {
    let xEgg = 20 * this.s;
    let yEgg = 20 * this.s;

    noStroke();
    fill(this.r, this.g, this.b);

    rect(this.x, this.y + 40 * this.s, xEgg + 40 * this.s, yEgg + 40 * this.s);
    rect(
      this.x + 100 * this.s,
      this.y + 20 * this.s,
      xEgg + 20 * this.s,
      yEgg + 20 * this.s
    );
    rect(
      this.x + 100 * this.s,
      this.y + 100 * this.s,
      xEgg + 20 * this.s,
      yEgg + 20 * this.s
    );
  }
}
