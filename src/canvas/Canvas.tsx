import React, { useEffect, useRef } from "react";
import { CanvasProps } from "../types";
import { Player } from "./classes";

const Canvas: React.FC<CanvasProps> = ({ height, width }) => {
  let player: Player;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // loop that animate the canvas
  function animate() {
    requestAnimationFrame(animate);
    player.update();
  }

  window.addEventListener("keyup", (e) => {
    if (e.keyCode === 87) {
      player.up();
    } else if (e.keyCode === 83) {
      console.log("DOWN");
    } else if (e.keyCode === 65) {
      console.log("LEFT");
    } else if (e.keyCode === 68) {
      console.log("RIGHT");
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        player = new Player(context);
        player.draw();
        animate();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
