import { Bird } from "./bird";
import "./css/index.css";
import { Pipe } from "./Pipe";

var canvas = <HTMLCanvasElement>document.getElementById("bird");
var ctx = canvas.getContext("2d");
var birdImage = new Image();
var backGround = new Image();
var above = new Image();
var below = new Image();
var play = new Image();

birdImage.src = "../src/images/bird.png";
backGround.src = "../src/images/nenchinh.png";
above.src = "../src/images/ongtren.png";
below.src = "../src/images/ongduoi.png";
play.src = "../src/images/buttonplay.png";

var bird = new Bird(400, 200, "live");
var pipe = new Pipe(canvas.width, 0);
var pipes = new Array<Pipe>();
pipes[0] = pipe;

var score = 0;
var distance = 100;

backGround.onload = function () {
  ctx.drawImage(backGround, 0, 0);
  ctx.drawImage(birdImage, bird.getX(), bird.getY());
  ctx.drawImage(play, bird.getX() - 90, bird.getY() + 70);
};
//
function barrier(): void {
  for (var i = 0; i < pipes.length; i++) {
    ctx.drawImage(above, pipes[i].getX(), pipes[i].getY());
    ctx.drawImage(below, pipes[i].getX(), above.height + distance);

    //cột di chuyển
    if (bird.getStatus() == "live") {
      pipes[i].move();
    }
    // thêm cột mới
    if (pipes[i].getX() == 450) {
      var pipe_next = new Pipe(canvas.width, 0);
      pipes.push(pipe_next);
    }
    //vượt qua ko va chạm
    if (
      pipes[i].getX() == bird.getX() &&
      bird.getY() > above.height &&
      bird.getY() < above.height + distance
    ) {
      score++;
    }
    //va chạm cột trên
    if (pipes[i].getX() == bird.getX() && bird.getY() <= above.height) {
      {
        bird.setStatus("died");
        modal.style.display = "block";
        document.getElementById("score_game").innerHTML = "score : " + score;
      }
    }
    //va chạm cột dưới
    if (
      pipes[i].getX() == bird.getX() &&
      bird.getY() >= above.height + distance
    ) {
      {
        bird.setStatus("died");
        modal.style.display = "block";
        document.getElementById("score_game").innerHTML = "score : " + score;
      }
    }
    //xử lý chim chạm xuống đất
    if (bird.getY() >= 480) {
      {
        bird.setStatus("died");
        modal.style.display = "block";
        document.getElementById("score_game").innerHTML = "score : " + score;
      }
    }
  }
}

function run(): void {
  //vẽ nền & chim
  ctx.drawImage(backGround, 0, 0);
  ctx.drawImage(birdImage, bird.getX(), bird.getY());

  // xử lý va chạm
  barrier();

  //chim rơi xuống
  if (bird.getStatus() == "live") {
    bird.fall(2);
  }
  requestAnimationFrame(run);
}
//xử lý nút play
document.onclick = function () {
  run();
};

var modal = document.getElementById("myModal");
// xử lý nút play_again
document.getElementById("play_again").onclick = function () {
  location.reload();
};

document.addEventListener("keydown", function () {
  bird.flyUp(40);
});
