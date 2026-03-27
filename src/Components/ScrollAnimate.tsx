"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollAnimate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      lerp: 0.1,
      smoothWheel: true,
    });

    // ✅ make Lenis globally accessible
    (window as any).lenis = lenis;

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div> {children} </div>;
}
