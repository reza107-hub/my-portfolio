import { useEffect, useRef } from "react";

const ProgressBar = ({ progress, title }) => {
  const calculateColor = (percentage) => {
    const redValue = Math.round(255 * (percentage / 100));
    return `rgba(255, 15, 89, ${redValue})`;
  };

  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let currentWidth = 0;
    let animationInterval = null;

    const animateProgressBar = () => {
      animationInterval = setInterval(() => {
        if (currentWidth >= progress) {
          clearInterval(animationInterval);
        } else {
          currentWidth++;
          barRef.current.style.width = `${currentWidth}%`;
          barRef.current.style.background = `linear-gradient(to right, #FFF8FA, ${calculateColor(
            currentWidth
          )})`;
          textRef.current.style.width = `${currentWidth}%`;
        }
      }, 10);
    };

    const handleScroll = () => {
      const progressBarOffsetTop = barRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop + windowHeight > progressBarOffsetTop) {
        clearInterval(animationInterval);
        animateProgressBar();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [progress]);

  return (
    <div className="relative">
      <div className="w-full h-3 bg-gray-300 mb-7 rounded-full overflow-hidden">
        <div ref={barRef} className="h-full"></div>
      </div>
      <p
        ref={textRef}
        className="absolute top-0 left-0 mt-3 mb-0 w-full text-right uppercase"
      >
        {title}: {progress}%
      </p>
    </div>
  );
};

export default ProgressBar;
