class GreyLines {

  constructor(ctx,xPos, centerGreyLinesPosition, width, height, color) {
    this.ctx = ctx;
    this.xPos = xPos;
    this.centerGreyLinesPosition = centerGreyLinesPosition;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    this.centerGreyLinesPosition.forEach(position => {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.xPos, position, this.width, this.height);
    })
  }

}
