function setup() {
  createCanvas(400, 400);
}

// 1秒間に60回呼ばれる
function draw() {
  // 夜の背景
  background("navy");

  // 月
  fill(255);
  stroke(0);
  circle(350, 50, 100);
  // 月の重なり
  stroke("navy");
  fill("navy");
  circle(320, 50, 100);

  // 山
  stroke(0);
  fill(80);
  // x1,y1.x2,y2.x3,y3(左，上，右)三角形の描画
  triangle(-40, 300, 75, 100, 250, 300);
  triangle(100, 300, 300, 100, 500, 300);

  // 草原
  fill("rgb(50,76,50)");
  rect(0, 300, 400, 100);

  // 雲
  fill(255);
  // frameCountはプログラムが開始してからのフレーム数
  cloudOneX = frameCount % width;
  // x,y,幅,高さの順で楕円を描画
  ellipse(cloudOneX, 50, 80, 40);
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);

  // 木1
  fill("rgb(118,80,72)");
  rect(40, 270, 15, 50);
  fill("green");
  triangle(25, 270, 45, 240 - (frameCount % 290), 70, 270);
  // 木2
  fill("rgb(118,80,72)");
  rect(340, 330, 15, 50);
  fill("green");
  triangle(325, 330, 345, 240 - (frameCount % 290), 370, 330);

  // 星
  stroke("yellow");
  // x1,y1,x2,y2の順で線を描画
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  lineXone = random(0, width);
  lineYone = random(0, height / 2);

  // マウスカーソルの座標
  fill(255);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
  //   console.log(cloudOneX);
}

let cloudOneX = 50;

let lineXone = 0;
let lineYone = 0;
