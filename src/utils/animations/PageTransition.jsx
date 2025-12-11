import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const container = useRef(null);

  useLayoutEffect(() => {
    const el = container.current;

    // Entrance animation
    gsap.fromTo(
      el,
      { 
        x: "100%",       // start offscreen right
        opacity: 0,      // invisible
        scale: 0.8,      // smaller
        rotation: 10,    // slight rotation
        skewX: 10         // skew for dynamic effect
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        skewX: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Exit animation
    return () => {
      gsap.to(el, {
        x: "-100%",      // slide off left
        opacity: 0,
        scale: 0.8,
        rotation: -10,
        skewX: -10,
        duration: 0.6,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <div ref={container} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}
