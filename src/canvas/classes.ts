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
    this.gravity = 0.5;
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
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // condition for a surface here to that player stop on the bottom of the canvas
    if (
      this.position.y + this.height + this.velocity.y <=
      this.ctx.canvas.height
    ) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
    this.draw();
  }

  up() {
    this.velocity.y -= 10;
  }

  right() {
    this.velocity.x += 5;
  }

  stopMoving() {
    this.velocity.x = 0;
  }

  left() {
    this.velocity.x -= 5;
  }
}

export { Player };
