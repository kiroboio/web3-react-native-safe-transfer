import { useRef, useEffect } from 'react';
export const usePreviousExisted = (value) => {
    const ref = useRef();
    useEffect(() => {
        if (!value)
            return;
        ref.current = value;
    });
    return ref.current;
};
