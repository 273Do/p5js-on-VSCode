function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220);
  background("aqua");
  // x座標200, y座標200, 直径100の円を描画
  circle(200, 200, 100);

  // マウスボタンを押すと円が黒くなる
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

  // マウスの位置に円を描画
  circle(mouseX, mouseY, 100);
}
