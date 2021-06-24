export default class RabbitState1 {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    push();
    translate(this.x, this.y);

    this.drawBody();
    this.drawEyes();
    this.drawFur();
    this.blink();
    pop();
  }

  //body rabbit
  drawBody() {
    let widthBody = 30;
    let heightBody = 30;
    let s = 0.7;

    stroke(0, 0, 0);
    fill(0, 0, 0);

    rect(this.x, this.y, widthBody * s, heightBody * s);
    rect(this.x + 30 * s, this.y - 90 * s, widthBody * s, heightBody + 60 * s);
    rect(this.x + 60 * s, this.y - 110 * s, widthBody * s, heightBody - 10 * s);
    rect(this.x + 90 * s, this.y - 90 * s, widthBody * s, heightBody + 60 * s);
    rect(
      this.x + 120 * s,
      this.y - 110 * s,
      widthBody * s,
      heightBody - 10 * s
    );
    rect(this.x + 150 * s, this.y - 90 * s, widthBody * s, heightBody + 90 * s);
    rect(this.x + 180 * s, this.y + 30 * s, widthBody + 70 * s, heightBody * s);
    rect(this.x + 280 * s, this.y + 60 * s, widthBody - 10 * s, heightBody * s);
    rect(this.x + 300 * s, this.y + 90 * s, widthBody + 40 * s, heightBody * s);
    rect(
      this.x + 370 * s,
      this.y + 120 * s,
      widthBody * s,
      heightBody + 40 * s
    );
    rect(
      this.x + 300 * s,
      this.y + 120 * s,
      widthBody * s,
      heightBody + 10 * s
    );
    rect(
      this.x + 330 * s,
      this.y + 160 * s,
      widthBody + 10 * s,
      heightBody + 57 * s
    );
    rect(
      this.x + 220 * s,
      this.y + 230 * s,
      widthBody + 90 * s,
      heightBody * s
    );
    rect(this.x - 30 * s, this.y + 30 * s, widthBody * s, heightBody + 80 * s);
    rect(this.x, this.y + 140 * s, widthBody + 30 * s, heightBody * s);
    rect(this.x + 60 * s, this.y + 170 * s, widthBody * s, heightBody * s);
    rect(this.x + 30 * s, this.y + 200 * s, widthBody * s, heightBody + 10 * s);
    rect(this.x + 30 * s, this.y + 230 * s, widthBody + 80 * s, heightBody * s);
    rect(
      this.x + 140 * s,
      this.y + 200 * s,
      widthBody + 50 * s,
      heightBody * s
    );
  }

  //eye rabbit
  drawEyes() {
    let xEyes = this.x + 40;
    let yEyes = this.y + 40;
    let sEyes = 0.7;

    noStroke();
    fill(0, 0, 0);
    rect(xEyes, yEyes, 30 * sEyes, 60 * sEyes);
  }

  //draw and coloring fur
  drawFur() {
    let widthFur = 30;
    let heightFur = 30;
    let sFur = 0.7;

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

    rect(
      this.x + 60 * sFur,
      this.y - 50 * sFur,
      widthFur * sFur,
      heightFur + 20 * sFur
    );
    rect(
      this.x + 120 * sFur,
      this.y - 50 * sFur,
      widthFur * sFur,
      heightFur + 52 * sFur
    );
    rect(
      this.x + 90 * sFur,
      this.y + 12 * sFur,
      widthFur * sFur,
      heightFur - 10 * sFur
    );
    rect(
      this.x + 90 * sFur,
      this.y + 12 * sFur,
      widthFur * sFur,
      heightFur - 10 * sFur
    );
    rect(
      this.x + 120 * sFur,
      this.y + 30 * sFur,
      widthFur + 20 * sFur,
      heightFur - 10 * sFur
    );
    rect(
      this.x + 150 * sFur,
      this.y + 60 * sFur,
      widthFur + 20 * sFur,
      heightFur - 10 * sFur
    );
    rect(
      this.x + 150 * sFur,
      this.y + 80 * sFur,
      widthFur * sFur,
      heightFur + 5 * sFur
    );
    rect(
      this.x + 120 * sFur,
      this.y + 127 * sFur,
      widthFur * sFur,
      heightFur + 1 * sFur
    );
    rect(
      this.x + 90 * sFur,
      this.y + 170 * sFur,
      widthFur * sFur,
      heightFur * sFur
    );
    rect(
      this.x + 60 * sFur,
      this.y + 200 * sFur,
      widthFur + 35 * sFur,
      heightFur * sFur
    );
    rect(
      this.x + 270 * sFur,
      this.y + 90 * sFur,
      widthFur * sFur,
      heightFur + 42 * sFur
    );
    rect(
      this.x + 250 * sFur,
      this.y + 62 * sFur,
      widthFur * sFur,
      heightFur + 42 * sFur
    );
    rect(
      this.x + 300 * sFur,
      this.y + 175 * sFur,
      widthFur * sFur,
      heightFur + 10 * sFur
    );
    rect(
      this.x + 235 * sFur,
      this.y + 145 * sFur,
      widthFur + 22 * sFur,
      heightFur + 10 * sFur
    );
  }

  //blink if rabbit is sleeping
  blink() {
    let xEyes = this.x + 40;
    let yEyes = this.y + 40;
    let sEyes = 0.7;

    if (sleep === true) {
      stroke(255, 255, 255);
      fill(255, 255, 255);
      rect(xEyes - 3 * sEyes, yEyes - 42 * sEyes, 33 * sEyes, 68 * sEyes);
    }
  }
}
