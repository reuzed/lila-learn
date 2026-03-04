import { useState, useRef, useEffect } from "react";
import { hashIndex } from "./utils";
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

export type Word = {
  text: string;
  followingPunctuation: string;
  translation: string;
};

export type ReaderProps = {
  extract: Word[];
  threshhold: number;
};

export default function Reader({ extract, threshhold }: ReaderProps) {
  const words = extract.map((word) => word.text);
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
        x: spRect.x - containerRect.left,
        xmid: (spRect.left + spRect.right) / 2 - containerRect.left,
        y: spRect.y - containerRect.top,
        width: spRect.width,
        height: spRect.height,
        top: spRect.top - containerRect.top,
        bottom: spRect.bottom - containerRect.top,
      });
    });
    setPositions(positions);
  }, [containerRef.current]);
  console.log(positions);
  return (
    <div className="relative" ref={containerRef}>
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        {positions.map((pos, i) => {
          if (hashIndex(i) < threshhold) {
            return (
              // <line
              //   key={i}
              //   x1={pos.xmid - 10}
              //   y1={pos.bottom}
              //   x2={pos.xmid + 10}
              //   y2={pos.bottom}
              //   stroke="red"
              //   strokeWidth={2}
              // />
              <text
                key={i}
                x={pos.xmid}
                y={pos.bottom}
                textAnchor="middle"
                dominantBaseline="hanging"
                fill="red"
                fontSize={20}
              >
                {extract[i].translation}
              </text>
            );
          }
        })}
      </svg>
      <div className="mt-4 m-auto w-2/3 text-2xl/15">
        {words.map((w, i) => {
          return (
            <>
              <span
                key={i}
                onClick={() => alert(extract[i].translation)}
                data-word-id={i}
              >
                {w}
              </span>
              {extract[i].followingPunctuation}
            </>
          );
        })}
      </div>
    </div>
  );
}
