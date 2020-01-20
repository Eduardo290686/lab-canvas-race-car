class Background {

  constructor(canvas, ctx,
    canvasWidth, canvasHeight,
    canvasBackground, whiteLineColor,
    borderColor) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.backgroundColor = canvasBackground;
    this.whiteLineColor = whiteLineColor;
    this.borderColor = borderColor;
  }

  draw() {
    this.canvas.style.width = this.canvasWidth;
    this.canvas.style.height = this.canvasHeight;
    this.canvas.style.background = this.backgroundColor;
    this.ctx.fillStyle = this.whiteLineColor;
    this.ctx.fillRect(10, 0, 15, 150);
    this.ctx.fillStyle = this.whiteLineColor;
    this.ctx.fillRect(275, 0, 15, 150);
    this.ctx.fillStyle = this.whiteLineColor;
    this.ctx.fillRect(142.5, 0, 15, 150);
    this.ctx.fillStyle = this.borderColor;
    this.ctx.fillRect(0, 0, 10, 150);
    this.ctx.fillStyle = this.borderColor;
    this.ctx.fillRect(290, 0, 10, 150);
    this.ctx.fillStyle = this.backgroundColor;
  }

}
