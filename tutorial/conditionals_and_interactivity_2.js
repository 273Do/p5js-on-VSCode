let sunHeight = 600;
// 色変更用の変数
let redVal = 0;
let greenVal = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  // 背景色
  background(redVal, greenVal, 0);

  // 太陽
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);

  // 山
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

  if (sunHeight > 130) {
    sunHeight -= 2;
  }
  if (sunHeight < 480) {
    redVal += 4;
    greenVal += 1;
  }

  // 太陽が出ているかつマウスが押されている時に背景を黒にする
  if (mouseIsPressed == true && sunHeight === 130) {
    background(0);
  }
}
