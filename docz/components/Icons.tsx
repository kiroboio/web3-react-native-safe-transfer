import React from "react";
import * as Icons from "../../dev/icons";

export const IconName = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",  }}>
      {Object.keys(Icons).map((key: string) => {
        const iconKey = key as keyof typeof Icons;
        const Icon = Icons[iconKey];
        return (
          <div style={{  margin: 8, height: 126, width: 126, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p>{key}</p>
            <Icon color="black" />
          </div>
        );
      })}
    </div>
  );
};
