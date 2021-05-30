import React from 'react';
export interface KiroboProps {
    children?: React.ReactNode;
    customHooks?: (() => void)[];
}
export declare const KiroboProvider: (props: KiroboProps) => JSX.Element;
