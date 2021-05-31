import { useRef, useEffect } from "react";
export var usePrevious = function (value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};
