// https://p5js.org/tutorials/get-started/

function setup() {
  // 400px x 400pxのキャンバスを作成
  createCanvas(600, 400);
}
function draw() {
  // 背景色をrgbで設定
  background(135, 206, 235);
  // 円の色を黄色に設定
  fill("yellow");
  // 線の色をorangeに設定
  stroke("orange");
  // 線の太さを20に設定
  strokeWeight(20);
  // x550, y50, 直径100の円を描画
  circle(550, 50, 100);

  fill("green");
  stroke(0);
  strokeWeight(1);
  // x,y(左上),幅,高さの順で長方形を描画
  rect(0, 200, 600, 200);

  // テキストを配置
  textSize(75);
  // x,y(左下)にテキストを配置
  text("🌸", 100, 250);
  text("🏠", 300, 250);
  // マウスの位置にテキストを配置
  text("🐦‍⬛", mouseX, mouseY);
}
