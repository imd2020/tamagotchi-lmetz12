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

    let xRabbit = 30;
    let yRabbit = 30;

    rect(this.x, this.y, xRabbit * this.s, yRabbit * this.s);
    rect(
      this.x + 30 * this.s,
      this.y - 30 * this.s,
      xRabbit + 30 * this.s,
      yRabbit * this.s
    );
    rect(this.x + 90 * this.s, this.y, xRabbit * this.s, yRabbit + 30 * this.s);
    rect(
      this.x + 120 * this.s,
      this.y + 60 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );
    rect(
      this.x + 150 * this.s,
      this.y + 120 * this.s,
      xRabbit + 90 * this.s,
      yRabbit * this.s
    );

    rect(
      this.x + 270 * this.s,
      this.y + 60 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );
    rect(
      this.x + 300 * this.s,
      this.y + 30 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );
    rect(this.x + 330 * this.s, this.y, xRabbit * this.s, yRabbit * this.s);
    rect(
      this.x + 360 * this.s,
      this.y - 30 * this.s,
      xRabbit + 30 * this.s,
      yRabbit * this.s
    );
    rect(
      this.x + 420 * this.s,
      this.y,
      xRabbit * this.s,
      yRabbit + 60 * this.s
    );
    rect(
      this.x + 390 * this.s,
      this.y + 90 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );
    rect(
      this.x + 360 * this.s,
      this.y + 120 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );
    rect(
      this.x + 330 * this.s,
      this.y + 150 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );
    rect(
      this.x + 360 * this.s,
      this.y + 210 * this.s,
      xRabbit * this.s,
      yRabbit + 90 * this.s
    );
    rect(
      this.x + 330 * this.s,
      this.y + 330 * this.s,
      xRabbit + 60 * this.s,
      yRabbit * this.s
    );
    rect(
      this.x + 330 * this.s,
      this.y + 350 * this.s,
      xRabbit * this.s,
      yRabbit + 60 * this.s
    );
    rect(
      this.x + 420 * this.s,
      this.y + 360 * this.s,
      xRabbit * this.s,
      yRabbit + 40 * this.s
    );
    rect(
      this.x + 330 * this.s,
      this.y + 420 * this.s,
      xRabbit + 90 * this.s,
      yRabbit * this.s
    );

    rect(
      this.x + 330 * this.s,
      this.y + 420 * this.s,
      xRabbit + 90 * this.s,
      yRabbit * this.s
    );

    rect(
      this.x - 30 * this.s,
      this.y + 30 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(this.x, this.y + 90 * this.s, xRabbit * this.s, yRabbit * this.s);
    rect(
      this.x + 30 * this.s,
      this.y + 120 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );
    rect(
      this.x + 60 * this.s,
      this.y + 150 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );
    rect(
      this.x + 30 * this.s,
      this.y + 180 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );
    rect(
      this.x,
      this.y + 210 * this.s,
      xRabbit * this.s,
      yRabbit + 90 * this.s
    );

    rect(
      this.x - 30 * this.s,
      this.y + 330 * this.s,
      xRabbit + 60 * this.s,
      yRabbit * this.s
    );
    rect(
      this.x - 60 * this.s,
      this.y + 360 * this.s,
      xRabbit * this.s,
      yRabbit + 60 * this.s
    );
    rect(
      this.x + 30 * this.s,
      this.y + 330 * this.s,
      xRabbit * this.s,
      yRabbit + 60 * this.s
    );
    rect(
      this.x - 60 * this.s,
      this.y + 420 * this.s,
      xRabbit + 90 * this.s,
      yRabbit * this.s
    );

    rect(
      this.x * this.s,
      this.y + 420 * this.s,
      xRabbit + 300 * this.s,
      yRabbit * this.s
    );

    // face
    rect(
      this.x + 100 * this.s,
      this.y + 240 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 260 * this.s,
      this.y + 240 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 170 * this.s,
      this.y + 340 * this.s,
      xRabbit + 30 * this.s,
      yRabbit * this.s
    );

    noStroke();
    fill(221, 160, 221);
    rect(
      this.x + 60 * this.s,
      this.y + 300 * this.s,
      xRabbit + 40 * this.s,
      yRabbit * this.s
    );

    rect(
      this.x + 260 * this.s,
      this.y + 300 * this.s,
      xRabbit + 40 * this.s,
      yRabbit * this.s
    );

    // ears
    rect(
      this.x + 360 * this.s,
      this.y + 30 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 330 * this.s,
      this.y + 60 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 300 * this.s,
      this.y + 120 * this.s,
      xRabbit * this.s,
      yRabbit * this.s
    );

    rect(
      this.x + 30 * this.s,
      this.y + 30 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 60 * this.s,
      this.y + 60 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );

    rect(
      this.x + 90 * this.s,
      this.y + 90 * this.s,
      xRabbit * this.s,
      yRabbit + 30 * this.s
    );
  }
}
