/// <reference types="react" />
/**
 * Use this hook to mutate the .current property instead of creating new
 *
 * Two use cases
 *
 * 1) To not adding state to hook deps
 * 2) For getting updated(mutated) state version in async operations
 *
 * @param state
 * @returns mutated state
 */
export declare const useCurrentMutableState: <T>(state: T) => import("react").MutableRefObject<T>;
