export default class SpeechBubble {
  constructor(x, y, s, text, textx, texty) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.text = text;
    this.textx = textx;
    this.texty = texty;
  }

  display() {
    this.drawBubble();
  }

  //draw speechbubble
  drawBubble() {
    let xBubble = 20 * this.s;
    let yBubble = 20 * this.s;

    fill(0, 0, 0);
    rect(this.x, this.y, xBubble, yBubble);
    rect(
      this.x + 20 * this.s,
      this.y - 20 * this.s,
      xBubble + 500 * this.s,
      yBubble
    );

    rect(this.x + 540 * this.s, this.y, xBubble, yBubble);
    rect(
      this.x + 560 * this.s,
      this.y + 20 * this.s,
      xBubble,
      yBubble + 100 * this.s
    );
    rect(this.x + 540 * this.s, this.y + 140 * this.s, xBubble, yBubble);
    rect(
      this.x + 20 * this.s,
      this.y + 160 * this.s,
      xBubble + 100 * this.s,
      yBubble
    );
    rect(
      this.x + 120 * this.s,
      this.y + 160 * this.s,
      xBubble,
      yBubble + 40 * this.s
    );
    rect(
      this.x + 100 * this.s,
      this.y + 220 * this.s,
      xBubble,
      yBubble + 20 * this.s
    );

    rect(this.x + 80 * this.s, this.y + 260 * this.s, xBubble, yBubble);
    rect(
      this.x + 100 * this.s,
      this.y + 240 * this.s,
      xBubble + 40 * this.s,
      yBubble
    );
    rect(this.x + 160 * this.s, this.y + 220 * this.s, xBubble, yBubble);
    rect(
      this.x + 180 * this.s,
      this.y + 160 * this.s,
      xBubble,
      yBubble + 40 * this.s
    );

    rect(
      this.x + 200 * this.s,
      this.y + 160 * this.s,
      xBubble + 320 * this.s,
      yBubble
    );

    rect(
      this.x - 20 * this.s,
      this.y + 20 * this.s,
      xBubble,
      yBubble + 100 * this.s
    );

    rect(this.x, this.y + 140 * this.s, xBubble, yBubble);

    textSize(26);
    stroke(0, 0, 0);
    text(this.text, this.textx, this.texty);
  }
}
