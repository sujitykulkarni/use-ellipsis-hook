import { useEffect, useRef } from "react";

type ScreenSizeType = { width: number; height: number };
/**
 * Hook to get current screen width and height
 * @returns
 */
const useScreenSize = (): ScreenSizeType => {
    const { innerWidth, innerHeight } = window;
    const screenSizeRef = useRef<ScreenSizeType>({
        width: innerWidth,
        height: innerHeight,
    });
    const setSize = () => {
        screenSizeRef.current = {
            width: innerWidth,
            height: innerHeight,
        };
    };

    useEffect(() => {
        window.addEventListener("resize", setSize);
        return () => {
            window.removeEventListener("resize", setSize);
        };
    });

    return screenSizeRef.current;
};

const computedThreshold = (screenWidth: number, responsivenessFactor: number): number =>
    Math.floor(screenWidth / responsivenessFactor);

const useEllipsisThreshold = (config: {responsivenessFactor: number, lowerLimit:number}): number => {
    const { width: screenWidth } = useScreenSize();
    const { responsivenessFactor,
        lowerLimit,
        } = config;
    const ellipsisThreshold = useRef(
        computedThreshold(screenWidth, responsivenessFactor)
    );

    useEffect(() => {
        ellipsisThreshold.current = computedThreshold(
            screenWidth,
            responsivenessFactor
        );
    }, [screenWidth]);
    return Math.min(lowerLimit, ellipsisThreshold.current);
}

export default useEllipsisThreshold;