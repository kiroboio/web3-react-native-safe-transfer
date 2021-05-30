import { useRef, useEffect } from 'react';
export var usePreviousExisted = function (value) {
    var ref = useRef();
    useEffect(function () {
        if (!value)
            return;
        ref.current = value;
    });
    return ref.current;
};
