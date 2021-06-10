import { useRef, useEffect } from "react";
/**
 * [how to use usePrevious post](https://usehooks.com/usePrevious/)
 * @param value
 * @returns previous value
 */
export var usePrevious = function (value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};
