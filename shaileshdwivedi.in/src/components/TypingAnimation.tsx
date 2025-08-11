import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  cursor = true,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (cursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);

      return () => clearInterval(cursorTimer);
    }
  }, [cursor]);

  return (
    <span className={`${className} inline-block`}>
      {displayedText}
      {cursor && (
        <span
          className={`inline-block w-0.5 h-em bg-current ml-1 ${
            showCursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
          style={{
            height: "1em",
            verticalAlign: "baseline",
          }}
        />
      )}
    </span>
  );
};

export default TypingAnimation;
