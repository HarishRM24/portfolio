
import React, { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className = "" }: AnimatedBackgroundProps) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  // Dynamically import Three.js components only when needed
  useEffect(() => {
    let isMounted = true;
    
    const loadThreeComponents = async () => {
      try {
        // Import components dynamically to avoid issues at build time
        const ReactThreeModule = await import('@react-three/fiber');
        const DreiModule = await import('@react-three/drei');
        const ThreeModule = await import('three');
        
        // If everything loaded successfully and component is still mounted
        if (isMounted) {
          setLoaded(true);
        }
      } catch (err) {
        console.error("Failed to load 3D components:", err);
        if (isMounted) {
          setError(true);
        }
      }
    };
    
    loadThreeComponents();
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  // If there was an error loading the Three.js components, render nothing
  if (error) {
    return null;
  }
  
  // If not yet loaded, render nothing (the fallback will be visible)
  if (!loaded) {
    return null;
  }
  
  // Render a simple placeholder that doesn't use any Three.js
  // The real 3D content would be mounted here if needed
  return (
    <div className={`fixed inset-0 -z-10 opacity-50 ${className}`}>
      <div className="animate-pulse w-full h-full bg-gradient-radial from-purple-500/10 to-transparent"></div>
    </div>
  );
};

export default AnimatedBackground;
