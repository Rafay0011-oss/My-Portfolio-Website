import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = ({ threshold = 0.15, rootMargin = '0px', triggerOnce = true } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

export const useStaggerAnimation = (count, options = {}) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(useScrollAnimation(options));
  }
  return results;
};

export default useScrollAnimation;
