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

const computedThreshold = (
  screenWidth: number,
  responsivenessFactor: number
): number => Math.floor(screenWidth / responsivenessFactor);

/**
 * This hook calculates the screen width, and returns a number that'll be
 * the width of your text, beyond which, rest of the content will be truncated.
 * @param config
 * @returns
 */
const useEllipsisThreshold = (config: {
  responsivenessFactor: number;
  lowerLimit: number;
}): number => {
  const { width: screenWidth } = useScreenSize();
  const { responsivenessFactor, lowerLimit } = config;
  const ellipsisThreshold = useRef(
    computedThreshold(screenWidth, responsivenessFactor)
  );

  useEffect(() => {
    ellipsisThreshold.current = computedThreshold(
      screenWidth,
      responsivenessFactor
    );
  }, [screenWidth]);
  return Math.max(lowerLimit, ellipsisThreshold.current);
};

export default useEllipsisThreshold;
