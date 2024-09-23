// 太陽と地平線のy座標のカスタム変数
let sunHeight;
let horizon = 200;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);

  // 太陽の座標をマウスのy座標に設定
  sunHeight = mouseY;
  // マウスの座標によって背景色を変える
  if (sunHeight < horizon) {
    background("lightblue");
  } else {
    background(0);
  }

  // 太陽
  fill("yellow");
  circle(200, sunHeight, 160);

  // 地平線
  fill("green");
  rect(0, horizon, 400, horizon);

  fill("green");

  rect(0, horizon, 400, 400);
}
