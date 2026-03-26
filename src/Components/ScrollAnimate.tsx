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

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ক্লিনআপ
    return () => {
      lenis.destroy();
    };
  }, []);

  return <div> {children} </div>;
}
