import React from "react";
interface Props {
  classes?: string;
}

export function Kirobo({ classes }: Props) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 99 100"
    >
      <path
        fill="#751C4B"
        fillRule="nonzero"
        d="M244.1 44.6h-21.9l-11 19 11 19h21.9l11-19-11-19z"
        transform="translate(-344.288 -195.307) translate(138.803 193.198) scale(1.05485)"
      ></path>
      <path
        fill="#EE499A"
        fillRule="nonzero"
        d="M255.1 63.6l-11-19h-21.9l10.9 19h22z"
        transform="translate(-344.288 -195.307) translate(138.803 193.198) scale(1.05485)"
      ></path>
      <path
        fill="#DB207A"
        fillRule="nonzero"
        d="M222.2 44.6l-11 19 11 19 10.9-19-10.9-19z"
        transform="translate(-344.288 -195.307) translate(138.803 193.198) scale(1.05485)"
      ></path>
      <g fill="" fillRule="nonzero">
        <path
          // eslint-disable-next-line max-len
          d="M246.8 2L225 39.7h10.9L257.7 2h-10.9zM268.7 2h-5.5l-21.7 37.7h5.5l1.3 2.3 1.4 2.4 21.7-37.7-2.7-4.7zM274.2 11.5l-21.7 37.7 5.4 9.5L279.7 21l-5.5-9.5z"
          transform="translate(-344.288 -195.307) translate(138.803 193.198) scale(1.05485)"
        ></path>
        <path
          d="M282.4 25.8l-35.5 61.6h-27.5l-13.7-23.8 23.5-40.7h-10.9l-23.5 40.7L214 96.8h38.3l35.6-61.6-5.5-9.4z"
          transform="translate(-344.288 -195.307) translate(138.803 193.198) scale(1.05485)"
        ></path>
      </g>
    </svg>
  );
}
