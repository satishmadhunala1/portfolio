"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

// helper (replace with your own utils if needed)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MOVEMENT_DAMPING = 1400;

// Light theme configuration
const GLOBE_CONFIG_LIGHT = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0, // Light mode
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.95, 0.95, 0.95], // Light gray base
  markerColor: [0.1, 0.5, 1], // Blue markers
  glowColor: [0.8, 0.8, 0.8], // Light glow
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

// Dark theme configuration
const GLOBE_CONFIG_DARK = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1, // Dark mode
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.1, 0.15], // Dark blue base
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Orange markers
  glowColor: [0.2, 0.2, 0.3], // Dark glow
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ 
  className, 
  config,
  isDarkMode = false 
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const prevIsDarkMode = useRef(isDarkMode);
  const globeInstance = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  // Initialize or update globe based on theme
  const initializeGlobe = () => {
    if (!canvasRef.current) return;
    
    // Choose config based on theme
    const currentConfig = isDarkMode ? GLOBE_CONFIG_DARK : GLOBE_CONFIG_LIGHT;
    const finalConfig = { ...currentConfig, ...config };
    
    // Destroy previous globe instance if it exists
    if (globeInstance.current) {
      globeInstance.current.destroy();
    }
    
    // Create new globe instance
    globeInstance.current = createGlobe(canvasRef.current, {
      ...finalConfig,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Fade in globe
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    initializeGlobe();

    return () => {
      if (globeInstance.current) {
        globeInstance.current.destroy();
        globeInstance.current = null;
      }
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Effect to update globe when theme changes
  useEffect(() => {
    if (prevIsDarkMode.current !== isDarkMode) {
      prevIsDarkMode.current = isDarkMode;
      
      // Fade out
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "0";
      }
      
      // Wait for fade out, then update globe
      setTimeout(() => {
        initializeGlobe();
      }, 300);
    }
  }, [isDarkMode]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-300 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}