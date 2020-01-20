class Obstacle {

  constructor(ctx, color, xPos, yPos) {
    this.ctx = ctx;
    this.color = color;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = 100;
    this.height = 5;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height); 
  }

}
