import { FC, useEffect, useRef, useState } from "react";
import "./Rainbowcursor.css";

export const RainbowCursor: FC = () => {
  const [rainbow, setRainbow] = useState(false);
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (cursor) {
        const x = event.clientX;
        const y = event.clientY;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        setTrail({ x, y });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const trailElement = trailRef.current;
    if (trailElement) {
      const distance = Math.sqrt(
        Math.pow(trail.x - cursorRef.current?.offsetLeft!, 2) +
          Math.pow(trail.y - cursorRef.current?.offsetTop!, 2)
      );
      trailElement.style.width = `${distance}px`;
      trailElement.style.opacity = "1";
    }
  }, [trail]);

  const handleCursorEnter = () => {
    setRainbow(true);
  };

  const handleCursorLeave = () => {
    setRainbow(false);
  };

  return (
    <div
      className="rainbow-cursor"
      onMouseEnter={handleCursorEnter}
      onMouseLeave={handleCursorLeave}
    >
      <div
        className={`rainbow ${rainbow ? "animate-rainbow" : ""}`}
        ref={cursorRef}
      >
        <div className="trail" ref={trailRef}></div>
      </div>
    </div>
  );
};
