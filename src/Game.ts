import { Bird } from "./bird";
import "./css/index.css";
import { Pipe } from "./Pipe";
import { GameScene } from "./GameScene";

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

var gameScene = new GameScene();

var bird = gameScene.createBird(400, 200, "live");
var pipe = new Pipe(canvas.width, 0);
var pipes = gameScene.createPipes();
pipes[0] = pipe;

var score = 0;

backGround.onload = function () {
  gameScene.create();
};

function loop(): void {
  gameScene.render(bird);

  gameScene.update(pipes, bird, modal);

  if (bird.getStatus() == "live") {
    bird.fall(2);
  }
  requestAnimationFrame(loop);
}

canvas.onclick = function () {
  loop();
};

var modal = document.getElementById("myModal");

document.getElementById("play_again").onclick = function () {
  location.reload();
};

document.addEventListener("keydown", function () {
  bird.flyUp(40);
});
