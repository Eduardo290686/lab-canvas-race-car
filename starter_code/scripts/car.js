class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './images/car.png';
    this.keyState = {
      keyLeft: false,
      keyRight: false,
    }
    this.movement = false;
    this.keyId = 0;
    this.xPos = 110;
    this.yPos = 105;
    this.width = 80;
    this.height = 40;
  }

  draw() {
    this.ctx.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
  }

  carMovement() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.keyCode === 37 &&
        this.keyId != 2) {
        this.keyState.keyLeft = true;
        this.movement = true;
        this.keyId = 1;
      }
      if (e.keyCode === 39 &&
        this.keyId != 1) {
        this.keyState.keyRight = true;
        this.movement = true;
        this.keyId = 2;
      }
    })
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.keyCode === 37) {
        this.keyState.keyLeft = false;
        this.movement = false;
        this.keyId = 0;
      }
      if (e.keyCode === 39) {
        this.keyState.keyRight = false;
        this.movement = false;
        this.keyId = 0;
      }
    })
  }
}