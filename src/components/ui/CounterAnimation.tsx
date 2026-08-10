'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CounterAnimation({ end, suffix = '+', duration = 2000 }: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current); // eslint-disable-line react-hooks/exhaustive-deps
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef} className="font-display inline-block">
      {count}
      {suffix}
    </span>
  );
}
