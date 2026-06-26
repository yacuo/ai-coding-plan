"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-BVBZJF8PQS";
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-BVBZJF8PQS");

    const baidu = document.createElement("script");
    baidu.async = true;
    baidu.src = "https://hm.baidu.com/hm.js?6d5edd5e985a08af1036d98cca1ee7f2";
    document.head.appendChild(baidu);

    const clarity = document.createElement("script");
    clarity.async = true;
    clarity.src = "https://www.clarity.ms/tag/xa1t5bx2ge";
    document.head.appendChild(clarity);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
