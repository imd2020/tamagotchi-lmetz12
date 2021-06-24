function setup() {
  createCanvas(1100, 900);
  /*canvasSettings.parent("tamagotchi");*/
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
