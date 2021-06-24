export default class RabbitState2 {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    push();
    translate(this.x, this.y);

    this.drawHead();
    this.drawEyes();
    this.drawBody();
    this.drawDetails();
    this.blink();

    pop();
  }

  //draw head
  drawHead() {
    let xHead = 20;
    let yHead = 20;
    let sHead = 1.0;

    fill(0, 0, 0);
    rect(this.x, this.y, xHead * sHead, yHead + 110 * sHead * sHead);
    rect(
      this.x + 20 * sHead,
      this.y - 10 * sHead,
      xHead + 10 * sHead,
      yHead - 10 * sHead
    );
    rect(this.x + 50 * sHead, this.y, xHead * sHead, yHead + 90 * sHead);
    rect(
      this.x + 70 * sHead,
      this.y + 90 * sHead,
      xHead + 70 * sHead,
      yHead * sHead
    );
    rect(this.x + 120 * sHead, this.y, xHead * sHead, yHead + 90 * sHead);
    rect(
      this.x + 140 * sHead,
      this.y - 10 * sHead,
      xHead + 10 * sHead,
      yHead - 10 * sHead
    );
    rect(this.x + 170 * sHead, this.y, xHead * sHead, yHead + 110 * sHead);
    rect(
      this.x - 20 * sHead,
      this.y + 130 * sHead,
      xHead * sHead,
      yHead + 80 * sHead
    );
    rect(
      this.x + 190 * sHead,
      this.y + 130 * sHead,
      xHead * sHead,
      yHead + 80 * sHead
    );
    rect(this.x, this.y + 230 * sHead, xHead * sHead, yHead * sHead);
    rect(
      this.x + 170 * sHead,
      this.y + 230 * sHead,
      xHead * sHead,
      yHead * sHead
    );
    rect(
      this.x + 20 * sHead,
      this.y + 250 * sHead,
      xHead + 130 * sHead,
      yHead * sHead
    );
  }

  //draw eyes
  drawEyes() {
    let xEyes = 20;
    let yEyes = 50;
    let sEyes = 1.0;

    rect(
      this.x + 125 * sEyes,
      this.y + 160 * sEyes,
      xEyes * sEyes,
      yEyes * sEyes
    );
    rect(
      this.x + 55 * sEyes,
      this.y + 160 * sEyes,
      xEyes * sEyes,
      yEyes * sEyes
    );
  }

  //draw details
  drawDetails() {
    let xDetails = 15;
    let yDetails = 15;
    let sDetails = 1.0;

    //color details
    noStroke();
    if (colorState === "blue") {
      fill(135, 206, 235);
    } else if (colorState === "pink") {
      fill(218, 112, 214);
    } else if (colorState === "grey") {
      fill(128, 128, 128);
    }

    //draw nose
    rect(
      this.x + 95 * sDetails,
      this.y + 215 * sDetails,
      xDetails * sDetails,
      yDetails * sDetails
    );

    //draw ears
    rect(
      this.x + 35 * sDetails,
      this.y + 30 * sDetails,
      xDetails * sDetails,
      yDetails + 66 * sDetails
    );
    rect(
      this.x + 155 * sDetails,
      this.y + 30 * sDetails,
      xDetails * sDetails,
      yDetails + 66 * sDetails
    );
  }

  //draw body
  drawBody() {
    let xBody = 20;
    let yBody = 20;
    let sBody = 1.0;

    fill(0, 0, 0);
    rect(
      this.x + 40 * sBody,
      this.y + 270 * sBody,
      xBody * sBody,
      yBody * sBody
    );

    rect(
      this.x + 40 * sBody,
      this.y + 270 * sBody,
      xBody * sBody,
      yBody + 100 * sBody
    );

    rect(
      this.x + 135 * sBody,
      this.y + 270 * sBody,
      xBody * sBody,
      yBody + 100 * sBody
    );

    rect(
      this.x + 20 * sBody,
      this.y + 290 * sBody,
      xBody * sBody,
      yBody * sBody
    );
    rect(
      this.x + 150 * sBody,
      this.y + 290 * sBody,
      xBody * sBody,
      yBody * sBody
    );

    rect(this.x, this.y + 310 * sBody, xBody * sBody, yBody + 60 * sBody);
    rect(
      this.x + 170 * sBody,
      this.y + 310 * sBody,
      xBody * sBody,
      yBody + 60 * sBody
    );

    rect(
      this.x + 20 * sBody,
      this.y + 370 * sBody,
      xBody + 150 * sBody,
      yBody * sBody
    );
    rect(
      this.x + 80 * sBody,
      this.y + 310 * sBody,
      xBody * sBody,
      yBody + 40 * sBody
    );

    rect(
      this.x + 190 * sBody,
      this.y + 250 * sBody,
      xBody + 12 * sBody,
      yBody * sBody
    );

    rect(
      this.x + 220 * sBody,
      this.y + 270 * sBody,
      xBody * sBody,
      yBody + 10 * sBody
    );

    rect(
      this.x + 170 * sBody,
      this.y + 270 * sBody,
      xBody * sBody,
      yBody + 20 * sBody
    );

    rect(
      this.x + 190 * sBody,
      this.y + 300 * sBody,
      xBody + 12 * sBody,
      yBody * sBody
    );
  }

  //blink if rabbit is sleeping
  blink() {
    let xEyes = 20;
    let yEyes = 50;
    let sEyes = 1.0;

    if (sleep === true) {
      fill(255, 255, 255);

      rect(
        this.x + 125 * sEyes,
        this.y + 130 * sEyes,
        xEyes * sEyes,
        yEyes * sEyes
      );
      rect(
        this.x + 55 * sEyes,
        this.y + 130 * sEyes,
        xEyes * sEyes,
        yEyes * sEyes
      );
    }
  }
}

/*function draw() {
  clear();
  background(255, 255, 255);
  rabbitState2.display();
}

let rabbitState2 = new RabbitState2(160, 130, 1.0);
*/
