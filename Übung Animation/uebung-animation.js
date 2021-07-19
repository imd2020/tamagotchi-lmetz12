import gsap from "./gsap.min.js";
import Button from "./TamagotchiButton.js";

let button = new Button(100, 200, 50, 50, "klick", 105, 230);

const imdRechteck = {
  x: 10,
};

function draw() {
  clear();
  button.display();
  rect(imdRechteck.x, 10, 50, 50);
}

function mouseClicked() {
  if (button.hitTest()) {
    gsap.to(imdRechteck, {
      duration: 3,
      ease: "easOutSquad",
      x: 400,
      onComplete: () => {
        doMyAnimation();
      },
    });
  }
}

function doMyAnimation() {
  gsap.to(imdRechteck, {
    duration: 3,
    ease: "easOutSquad",
    x: 0,
  });
}
