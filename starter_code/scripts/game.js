const Game = {

  canvas: undefined,

  ctx: undefined,

  intervalId: '',

  fps: 60,

  borderColor: '#006600',
  canvasBackground: 'grey',
  whiteLineColor: 'white',
  borderColor: '#006600',
  canvasWidth: '23vw',
  canvasHeight: '80vh',

  centerLinesColor: 'grey',

  obstacleColor: 'brown',

  greyCenterLinesX: 142,
  centerGreyLinesPosition: [-15, 15, 45, 75, 105, 135],
  greyLinesWidth: 16,
  greyLinesHeight: 15,

  generatorCounter: 0,
  obstacleArr: [],

  bottomCollissionDistance: 0,
  topCollissionDistance: 0,
  leftAndRightCollissionDistance: 0,

  checkCollission: false,

  speed: 1,

  init: function () {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.background = new Background(this.canvas,
      this.ctx, this.canvasWidth, this.canvasHeight,
      this.canvasBackground, this.whiteLineColor,
      this.borderColor);
    this.greyLines = new GreyLines(this.ctx, this.greyCenterLinesX,
      this.centerGreyLinesPosition, this.greyLinesWidth,
      this.greyLinesHeight, this.centerLinesColor);
    this.car = new Car(this.ctx);
    this.background.draw();
    this.greyLines.draw();
    this.car.draw(this.car.xPos);
  },

  start: function () {
    this.intervalId = setInterval(() => {
      this.clear();
      this.background.draw();
      this.movingGreyLines();
      this.greyLines.draw();
      this.car.carMovement();
      this.moveCar();
      this.car.draw(this.car.xPos);
      this.obstacleGenerator()
      this.obstacleArr.forEach(obstacle => obstacle.draw());
      this.movingObtacles();
      this.deleteObstacle();
      this.collission();
      if (this.checkCollission === true) {
        alert('Game Over')
      }
      this.generatorCounter++;
    }, 1000 / this.fps)
  },

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  },


  movingGreyLines() {
    for (let i = 0; i < this.greyLines.centerGreyLinesPosition.length; i++) {
      if (this.greyLines.centerGreyLinesPosition[i] === 150) {
        this.greyLines.centerGreyLinesPosition[i] = -30;
      }
      this.greyLines.centerGreyLinesPosition[i] += 0.5;
    }
  },

  moveCar() {
    if (this.car.keyState.keyLeft) {
      this.car.xPos -= this.speed;
    } else if (this.car.keyState.keyRight) {
      this.car.xPos += this.speed;
    }
  },

  obstacleGenerator() {
    if (this.generatorCounter === 200) {
      let obstacleXPos = Math.floor(Math.random() * (200 - 25 + 1)) + 25;
      let obstacleYPos = -10;
      let obstacle = new Obstacle(this.ctx, this.obstacleColor,
        obstacleXPos, obstacleYPos);
      this.obstacleArr.push(obstacle);
      this.generatorCounter = 0;
    }
  },

  movingObtacles() {
    for (let i = 0; i < this.obstacleArr.length; i++) {
      this.obstacleArr[i].yPos += 0.5;
    }
  },

  deleteObstacle() {
    this.obstacleArr = this.obstacleArr.filter(obstacle => obstacle.yPos < 200)
  },

  collission() {
    for (let i = 0; i < this.obstacleArr.length; i++) {
      if (this.car.xPos + this.car.width -
        this.leftAndRightCollissionDistance - 5 > this.obstacleArr[i].xPos &&
        this.car.xPos < this.obstacleArr[i].xPos +
        this.obstacleArr[i].width -
        this.leftAndRightCollissionDistance - 5 &&
        this.car.yPos < this.obstacleArr[i].yPos +
        this.obstacleArr[i].height - this.bottomCollissionDistance &&
        this.car.yPos + this.car.height -
        this.topCollissionDistance > this.obstacleArr[i].yPos) {
        this.checkCollission = true;
      }
    }
  }

}
