import { Pipe } from "./Pipe";
import { Bird } from "./bird";
export class GameScene {
  private bird: Bird;
  private pipes: Array<Pipe>;
  //
  create(bird: Bird) {
    var canvas = <HTMLCanvasElement>document.getElementById("bird");
    var ctx = canvas.getContext("2d");
    var play = new Image();
    var birdImage = new Image();
    var backGround = new Image();
    birdImage.src = "../src/images/bird.png";
    backGround.src = "../src/images/nenchinh.png";
    play.src = "../src/images/buttonplay.png";
    ctx.drawImage(backGround, 0, 0);
    ctx.drawImage(birdImage, bird.getX(), bird.getY());
    ctx.drawImage(play, bird.getX() - 90, bird.getY() + 70);
  }
  //
  createBird(x: number, y: number, status: string): Bird {
    return (this.bird = new Bird(x, y, status));
  }
  //
  createPipes(): Array<Pipe> {
    return (this.pipes = new Array<Pipe>());
  }
  //
  update(
    pipes: Array<Pipe>,
    bird: Bird,
    modal = document.getElementById("myModal")
  ) {
    var canvas = <HTMLCanvasElement>document.getElementById("bird");
    var ctx = canvas.getContext("2d");
    var above = new Image();
    var below = new Image();
    above.src = "../src/images/ongtren.png";
    below.src = "../src/images/ongduoi.png";
    var score = 0;
    for (var i = 0; i < pipes.length; i++) {
      ctx.drawImage(above, pipes[i].getX(), pipes[i].getY());
      ctx.drawImage(below, pipes[i].getX(), above.height + 100);

      if (bird.getStatus() == "live") {
        pipes[i].move();
      }

      if (pipes[i].getX() == 450) {
        var pipe_next = new Pipe(canvas.width, 0);
        pipes.push(pipe_next);
      }

      if (
        pipes[i].getX() == bird.getX() &&
        bird.getY() > above.height &&
        bird.getY() < above.height + 100
      ) {
        score++;
      }

      if (pipes[i].getX() == bird.getX() && bird.getY() <= above.height) {
        {
          bird.setStatus("died");
          modal.style.display = "block";
          document.getElementById("score_game").innerHTML = "score : " + score;
        }
      }

      if (pipes[i].getX() == bird.getX() && bird.getY() >= above.height + 100) {
        {
          bird.setStatus("died");
          modal.style.display = "block";
          document.getElementById("score_game").innerHTML = "score : " + score;
        }
      }

      if (bird.getY() >= 480) {
        {
          bird.setStatus("died");
          modal.style.display = "block";
          document.getElementById("score_game").innerHTML = "score : " + score;
        }
      }
    }
  }
  //
  render(bird: Bird) {
    var canvas = <HTMLCanvasElement>document.getElementById("bird");
    var ctx = canvas.getContext("2d");
    var birdImage = new Image();
    var backGround = new Image();
    birdImage.src = "../src/images/bird.png";
    backGround.src = "../src/images/nenchinh.png";
    ctx.drawImage(backGround, 0, 0);
    ctx.drawImage(birdImage, bird.getX(), bird.getY());
  }
}
