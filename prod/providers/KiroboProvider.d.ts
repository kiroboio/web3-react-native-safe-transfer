import React from "react";
export interface KiroboProps {
    children?: React.ReactNode;
    customHooks?: (() => void)[];
    features?: ("onChainWallet" | "backup" | "inheritance")[];
}
export declare const KiroboProvider: (props: KiroboProps) => JSX.Element;
