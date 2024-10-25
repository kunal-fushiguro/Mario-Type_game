class Player {
  position: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
  height: number;
  width: number;
  ctx: CanvasRenderingContext2D;
  gravity: number;
  constructor(ctx: CanvasRenderingContext2D) {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 30;
    this.width = 30;
    this.ctx = ctx;
    this.gravity = 0.2;
  }

  //   drawing a player
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  //  update the player
  update() {
    // clear the previous so that the new one can render using animate function
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.position.y += this.velocity.y;
    this.velocity.y += this.gravity;
    this.draw();
  }
}

export { Player };
