import { useRef, useEffect } from "react";
/**
 * [how to use usePrevious post](https://usehooks.com/usePrevious/)
 * @param value
 * @returns previous value if it's not undefined
 */
export var usePreviousExisted = function (value) {
    var ref = useRef();
    useEffect(function () {
        if (!value)
            return;
        ref.current = value;
    });
    return ref.current;
};
