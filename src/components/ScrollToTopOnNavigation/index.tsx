"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollToTopOnNavigation() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    scrollToTop();
    const animationFrame = window.requestAnimationFrame(scrollToTop);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname]);

  return null;
}
