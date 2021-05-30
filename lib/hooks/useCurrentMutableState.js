import { useEffect, useRef } from 'react';
/**
 * Use this hook to mutate the .current value instead of creating new
 *
 * Two use cases
 *
 * 1) For not adding state to hook deps
 * 2) For getting updated(mutated) state version in async operations
 */
export const useCurrentMutableState = (state) => {
    const ref = useRef(state);
    useEffect(() => {
        ref.current = state;
    }, [state]);
    return ref;
};
