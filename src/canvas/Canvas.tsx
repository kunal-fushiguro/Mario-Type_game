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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        player = new Player(context);
        player.draw();
        // animate();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
