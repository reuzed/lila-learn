import { useState, useRef, useEffect } from "react";
// import type { HTMLDivElement } from "react";

// type Coord = { x: number; y: number };
type Position = {
  x: number;
  xmid: number;
  y: number;
  width: number;
  height: number;
  top: number;
  bottom: number;
};

export default function Reader({ text }: { text: string }) {
  const words = text.split(" ");
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const containerRect = container.getBoundingClientRect();

    const spans = container.querySelectorAll("[data-word-id]");
    let positions: Position[] = [];
    spans.forEach((sp) => {
      const spRect = sp.getBoundingClientRect();
      positions.push({
        x: spRect.x,
        xmid: (spRect.left + spRect.right) / 2,
        y: spRect.y,
        width: spRect.width,
        height: spRect.height,
        top: spRect.top,
        bottom: spRect.bottom,
      });
    });
    setPositions(positions);
  }, [containerRef.current]);
  console.log(positions);
  return (
    <div className="relative" ref={containerRef}>
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        {positions.map((pos, i) => {
          return (
            <line
              key={i}
              x1={pos.xmid - 10}
              y1={pos.bottom}
              x2={pos.xmid + 10}
              y2={pos.bottom}
              stroke="red"
              strokeWidth={2}
            />
          );
        })}
      </svg>
      <div className="mt-4 m-auto w-2/3 text-2xl/15">
        {words.map((w, i) => {
          return (
            <span key={i} data-word-id={i}>
              {w}{" "}
            </span>
          );
        })}
      </div>
      {positions.map((p) => p.x)}
    </div>
  );
}
