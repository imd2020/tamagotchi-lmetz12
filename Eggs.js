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
    let xEgg = 20;
    let yEgg = 20;
    let sEgg = 1.0;

    noStroke();
    fill(0, 0, 0);

    rect(this.x, this.y, xEgg * sEgg, yEgg * sEgg);
    rect(this.x + 20 * sEgg, this.y - 20 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(this.x + 40 * sEgg, this.y - 40 * sEgg, xEgg + 40 * sEgg, yEgg * sEgg);
    rect(this.x + 100 * sEgg, this.y - 20 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(this.x + 120 * sEgg, this.y, xEgg * sEgg, yEgg * sEgg);
    rect(
      this.x + 140 * sEgg,
      this.y + 20 * sEgg,
      xEgg * sEgg,
      yEgg + 20 * sEgg
    );
    rect(
      this.x + 160 * sEgg,
      this.y + 60 * sEgg,
      xEgg * sEgg,
      yEgg + 40 * sEgg
    );
    rect(this.x + 140 * sEgg, this.y + 120 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(this.x + 120 * sEgg, this.y + 140 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(this.x - 20 * sEgg, this.y + 20 * sEgg, xEgg * sEgg, yEgg + 20 * sEgg);
    rect(this.x - 40 * sEgg, this.y + 60 * sEgg, xEgg * sEgg, yEgg + 40 * sEgg);
    rect(this.x - 20 * sEgg, this.y + 120 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(this.x * sEgg, this.y + 140 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(
      this.x + 20 * sEgg,
      this.y + 160 * sEgg,
      xEgg + 80 * sEgg,
      yEgg * sEgg
    );
  }

  //shading egg
  drawDetails() { 
    let xEgg = 20;
    let yEgg = 20;
    let sEgg = 1.0;

    noStroke();
    fill(192, 192, 192);

    rect(this.x * sEgg, this.y + 120 * sEgg, xEgg + 20 * sEgg, yEgg * sEgg);
    rect(this.x + 20 * sEgg, this.y + 140 * sEgg, xEgg * sEgg, yEgg * sEgg);
    rect(
      this.x + 40 * sEgg,
      this.y + 140 * sEgg,
      xEgg + 60 * sEgg,
      yEgg * sEgg
    );
    rect(this.x - 20 * sEgg, this.y + 60 * sEgg, xEgg * sEgg, yEgg + 40 * sEgg);
    rect(this.x, this.y + 20 * sEgg, xEgg * sEgg, yEgg + 20 * sEgg);
    rect(this.x + 20 * sEgg, this.y, xEgg * sEgg, yEgg * sEgg);
    rect(this.x + 40 * sEgg, this.y - 20 * sEgg, xEgg * sEgg, yEgg * sEgg);
  }

  //coloring egg
  fillColor() {
    let xEgg = 20;
    let yEgg = 20;

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
