export default class Button {
  constructor(x, y, width, height, text, xtext, ytext) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.xtext = xtext;
    this.ytext = ytext;
  }

  display() {
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height);

    textSize(18);
    fill(0, 0, 0);
    text(this.text, this.xtext, this.ytext);
  }

  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      this.state = "clicked";
      return true;
    } else {
      return false;
    }
  }
}
