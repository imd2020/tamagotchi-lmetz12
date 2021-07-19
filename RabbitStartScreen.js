export default class RabbitStartScreen {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    this.drawRabbit();
  }

  drawRabbit() {
    fill(0, 0, 0);

    let xRabbit = 30 * this.s;
    let yRabbit = 30 * this.s;

    rect(this.x, this.y, xRabbit, yRabbit);
    rect(
      this.x + 30 * this.s,
      this.y - 30 * this.s,
      xRabbit + 30 * this.s,
      yRabbit
    );
    rect(this.x + 90 * this.s, this.y, xRabbit, yRabbit + 30 * this.s);
    rect(
      this.x + 120 * this.s,
      this.y + 60 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );
    rect(
      this.x + 150 * this.s,
      this.y + 120 * this.s,
      xRabbit + 90 * this.s,
      yRabbit
    );

    rect(
      this.x + 270 * this.s,
      this.y + 60 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );
    rect(this.x + 300 * this.s, this.y + 30 * this.s, xRabbit, yRabbit);
    rect(this.x + 330 * this.s, this.y, xRabbit, yRabbit);
    rect(
      this.x + 360 * this.s,
      this.y - 30 * this.s,
      xRabbit + 30 * this.s,
      yRabbit
    );
    rect(this.x + 420 * this.s, this.y, xRabbit, yRabbit + 60 * this.s);
    rect(this.x + 390 * this.s, this.y + 90 * this.s, xRabbit, yRabbit);
    rect(this.x + 360 * this.s, this.y + 120 * this.s, xRabbit, yRabbit);
    rect(
      this.x + 330 * this.s,
      this.y + 150 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );
    rect(
      this.x + 360 * this.s,
      this.y + 210 * this.s,
      xRabbit,
      yRabbit + 90 * this.s
    );
    rect(
      this.x + 330 * this.s,
      this.y + 330 * this.s,
      xRabbit + 60 * this.s,
      yRabbit
    );
    rect(
      this.x + 330 * this.s,
      this.y + 350 * this.s,
      xRabbit,
      yRabbit + 60 * this.s
    );
    rect(
      this.x + 420 * this.s,
      this.y + 360 * this.s,
      xRabbit,
      yRabbit + 40 * this.s
    );
    rect(
      this.x + 330 * this.s,
      this.y + 420 * this.s,
      xRabbit + 90 * this.s,
      yRabbit
    );

    rect(
      this.x + 330 * this.s,
      this.y + 420 * this.s,
      xRabbit + 90 * this.s,
      yRabbit
    );

    rect(
      this.x - 30 * this.s,
      this.y + 30 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(this.x, this.y + 90 * this.s, xRabbit, yRabbit);
    rect(this.x + 30 * this.s, this.y + 120 * this.s, xRabbit, yRabbit);
    rect(this.x + 60 * this.s, this.y + 150 * this.s, xRabbit, yRabbit);
    rect(this.x + 30 * this.s, this.y + 180 * this.s, xRabbit, yRabbit);
    rect(this.x, this.y + 210 * this.s, xRabbit, yRabbit + 90 * this.s);

    rect(
      this.x - 30 * this.s,
      this.y + 330 * this.s,
      xRabbit + 60 * this.s,
      yRabbit
    );
    rect(
      this.x - 60 * this.s,
      this.y + 360 * this.s,
      xRabbit,
      yRabbit + 60 * this.s
    );
    rect(
      this.x + 30 * this.s,
      this.y + 330 * this.s,
      xRabbit,
      yRabbit + 60 * this.s
    );
    rect(
      this.x - 60 * this.s,
      this.y + 420 * this.s,
      xRabbit + 90 * this.s,
      yRabbit
    );

    rect(
      this.x * this.s,
      this.y + 420 * this.s,
      xRabbit + 300 * this.s,
      yRabbit
    );

    //face
    rect(
      this.x + 100 * this.s,
      this.y + 240 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 260 * this.s,
      this.y + 240 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 170 * this.s,
      this.y + 340 * this.s,
      xRabbit + 30 * this.s,
      yRabbit
    );

    noStroke();
    fill(221, 160, 221);
    rect(
      this.x + 60 * this.s,
      this.y + 300 * this.s,
      xRabbit + 40 * this.s,
      yRabbit
    );

    rect(
      this.x + 260 * this.s,
      this.y + 300 * this.s,
      xRabbit + 40 * this.s,
      yRabbit
    );

    // ears
    rect(
      this.x + 360 * this.s,
      this.y + 30 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 330 * this.s,
      this.y + 60 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(this.x + 300 * this.s, this.y + 120 * this.s, xRabbit, yRabbit);

    rect(
      this.x + 30 * this.s,
      this.y + 30 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 60 * this.s,
      this.y + 60 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 90 * this.s,
      this.y + 90 * this.s,
      xRabbit,
      yRabbit + 30 * this.s
    );

    //details ear
    fill(255, 255, 255);
    rect(this.x, this.y + 30 * this.s, xRabbit, yRabbit + 30 * this.s);
    rect(this.x + 60 * this.s, this.y + 30 * this.s, xRabbit, yRabbit);
  }
}
