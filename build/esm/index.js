import { useEffect, useRef } from "react";
/**
 * Hook to get current screen width and height
 * @returns
 */
var useScreenSize = function () {
    var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
    var screenSizeRef = useRef({
        width: innerWidth,
        height: innerHeight,
    });
    var setSize = function () {
        screenSizeRef.current = {
            width: innerWidth,
            height: innerHeight,
        };
    };
    useEffect(function () {
        window.addEventListener("resize", setSize);
        return function () {
            window.removeEventListener("resize", setSize);
        };
    });
    return screenSizeRef.current;
};
var computedThreshold = function (screenWidth, responsivenessFactor) {
    return Math.floor(screenWidth / responsivenessFactor);
};
var useEllipsisThreshold = function (config) {
    var screenWidth = useScreenSize().width;
    var responsivenessFactor = config.responsivenessFactor, lowerLimit = config.lowerLimit;
    var ellipsisThreshold = useRef(computedThreshold(screenWidth, responsivenessFactor));
    useEffect(function () {
        ellipsisThreshold.current = computedThreshold(screenWidth, responsivenessFactor);
    }, [screenWidth]);
    return Math.min(lowerLimit, ellipsisThreshold.current);
};
export default useEllipsisThreshold;
