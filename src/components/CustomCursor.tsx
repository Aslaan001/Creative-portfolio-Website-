import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const onMouseOut = () => {
      setIsVisible(false);
    };

    const onMouseOver = () => {
      setIsVisible(true);
    };

    const handleLinkHoverIn = () => {
      setIsHovering(true);
    };

    const handleLinkHoverOut = () => {
      setIsHovering(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseover', onMouseOver);

    // Add listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverIn);
      el.addEventListener('mouseleave', handleLinkHoverOut);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseover', onMouseOver);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverIn);
        el.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, [isVisible]);

  // Hide the cursor on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isVisible ? 'opacity-100' : 'opacity-0'} ${
        isHovering ? 'scale-[3] bg-primary-500/20' : 'scale-100'
      }`}
      style={{ 
        mixBlendMode: 'difference', 
        pointerEvents: 'none',
      }}
    />
  );
};

export default CustomCursor;