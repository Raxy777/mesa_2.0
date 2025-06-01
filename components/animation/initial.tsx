"use client";

import React, { useEffect, useState, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Initial = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setShowAnimation(true);
      // Set the visited flag
      localStorage.setItem('hasVisited', 'true');

      // Add event listener for animation completion
      const checkCompletion = () => {
        if (lottieRef.current?.isComplete) {
          setShowAnimation(false);
        }
      };

      const interval = setInterval(checkCompletion, 100);
      return () => clearInterval(interval);
    }
  }, []);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <DotLottieReact
        ref={lottieRef}
        src="https://lottie.host/4844325b-2cfd-4615-bf30-2fc5093da124/t1nQPe3ALz.lottie"
        loop={false}
        autoplay
      />
    </div>
  );
};
