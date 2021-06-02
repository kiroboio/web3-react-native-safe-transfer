import React from "react";
export function ArrowLeft({ color }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipRule="evenodd"
      viewBox="0 0 16 16"
    >
      <g fill={color} stroke="" strokeWidth="2">
        <path d="M15 8H1M8 15L1 8l7-7"></path>
      </g>
    </svg>
  );
}
