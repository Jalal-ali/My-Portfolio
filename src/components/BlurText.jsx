import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import React from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  // Ensure that the text is treated as a string
  const elements = React.Children.toArray(text).map((child) => {
    // Check if the child is a string, we will split it
    if (typeof child === 'string') {
      return animateBy === 'words' ? child.split(' ') : child.split('');
    }
    // For JSX, we keep it as is
    return child;
  }).flat();

  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(9px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
          for (const step of (animationTo || defaultTo)) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  // Render elements (JSX or plain text)
  const renderTextElement = (element) => {
    return React.isValidElement(element) ? (
      element // Render JSX if it's valid React element
    ) : element === ' ' ? (
      '\u00A0' // Non-breaking space for proper spacing between words
    ) : (
      element
    );
  };

  return (
    <p ref={ref} className={`blur-text ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transition-transform will-change-[transform,filter,opacity]"
        >
          {renderTextElement(elements[index])}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </p>
  );
};

BlurText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // Accepts string or JSX nodes
  delay: PropTypes.number,
  className: PropTypes.string,
  animateBy: PropTypes.oneOf(['words', 'letters']), // Restricts to 'words' or 'letters'
  direction: PropTypes.oneOf(['top', 'bottom']), // Restricts to 'top' or 'bottom'
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  animationFrom: PropTypes.object, // Should be an object (e.g., { opacity: 0 })
  animationTo: PropTypes.object, // Should be an object (e.g., { opacity: 1 })
  easing: PropTypes.string,
  onAnimationComplete: PropTypes.func, // Callback function when animation completes
};

export default BlurText;
