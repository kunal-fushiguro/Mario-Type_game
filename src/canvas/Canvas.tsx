import React, { useEffect, useRef } from "react";
import { CanvasProps } from "../types";
import { Player, Platform } from "./classes";

const Canvas: React.FC<CanvasProps> = ({ height, width }) => {
  let player: Player;
  let platform: Platform;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Collision detection between player and platform
  function detectPlatformCollision() {
    // Check if player's bottom is at or slightly above the platform's top
    const playerBottom = player.position.y + player.height;
    const platformTop = platform.position.y;
    const playerRight = player.position.x + player.width;
    const platformRight = platform.position.x + platform.width;

    const isColliding =
      playerBottom >= platformTop &&
      player.position.y <= platformTop &&
      playerRight >= platform.position.x &&
      player.position.x <= platformRight;

    if (isColliding) {
      // Stop player's downward movement
      player.velocity.y = 0;
      // Position player exactly on top of the platform
      player.position.y = platformTop - player.height;
    }
  }

  // loop that animate the canvas
  function animate() {
    requestAnimationFrame(animate);
    player.update();
    platform.draw();
    detectPlatformCollision();
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "w") player.up();
    if (e.key === "a") player.left();
    if (e.key === "d") player.right();
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "a" || e.key === "d") player.stopMoving();
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        player = new Player(context);
        platform = new Platform(context);
        player.draw();
        animate();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
