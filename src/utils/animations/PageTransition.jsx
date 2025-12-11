import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const container = useRef(null);

  useLayoutEffect(() => {
    const el = container.current;

    gsap.fromTo(
      el,
      { x: 80, opacity: 0 },  // from right
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    return () => {
      gsap.to(el, {
        x: -80,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <div
      ref={container}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );
}