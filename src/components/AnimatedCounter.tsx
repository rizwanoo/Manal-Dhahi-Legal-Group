import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse prefix, number, and suffix from the string
  // Examples: '15+', '20+', '1,200+', '100%', 'CR 108662-2'
  const match = value.match(/^([^0-9]*)([\d,]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numString = match ? match[2].replace(/,/g, '') : '';
  const targetNumber = numString ? parseInt(numString, 10) : null;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    if (targetNumber === null || isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic: fast initial start, gentle decelerating finish
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOutProgress * targetNumber);

            setDisplayValue(
              `${prefix}${currentNum.toLocaleString()}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(
                `${prefix}${targetNumber.toLocaleString()}${suffix}`
              );
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [value, targetNumber, prefix, suffix, duration, hasAnimated]);

  return (
    <span
      ref={elementRef}
      className={`inline-block tabular-nums transition-transform duration-300 ${className}`}
      aria-label={value}
    >
      {hasAnimated ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
};
