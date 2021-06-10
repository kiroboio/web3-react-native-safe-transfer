/**
 * ### debug hooks
 * _useEffect | useCallback | useMemo | useLayoutEffect | Custom hooks using core hooks_
 *
 * [docs](https://github.com/simbathesailor/use-what-changed)
 *
 * @param hookDescription
 * @param deps
 *
 * @returns `{@link useWhatChanged}``
 *
 * ### usage
 *
 * ```
 * useWhatChangedDev('sendFormEffects', {
 *   address,
 *   chainId,
 *   reset,
 *   depositCmdIsDone: depositCmd.is.done,
 *   page,
 *   setValue,
 * })
 * useEffect(() => {
 *    if (address && chainId) reset()
 * }, [address, chainId, reset])
 * useEffect(() => {
 *    if (depositCmd.is.done) reset()
 * }, [depositCmd.is.done, reset])
 * useEffect(() => {
 *    setValue('passcode', '')
 * }, [page, setValue])
 *```
 *
 */
export declare const useWhatChangedDev: (hookDescription: string, deps?: {
    [key: string]: unknown;
} | undefined) => void;
