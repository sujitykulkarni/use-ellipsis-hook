/**
 * This hook calculates the screen width, and returns a number that'll be
 * the width of your text, beyond which, rest of the content will be truncated.
 * @param config
 * @returns
 */
declare const useEllipsisThreshold: (config: {
    responsivenessFactor: number;
    lowerLimit: number;
}) => number;
export default useEllipsisThreshold;
