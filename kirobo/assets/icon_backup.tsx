import React, { ReactElement } from 'react';

export function IconBackup({ color }: { color?: string }): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31" viewBox="0 0 512 512">
      <path
        fill={color || 'white'}
        // eslint-disable-next-line max-len
        d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"
      ></path>
    </svg>
  );
}
