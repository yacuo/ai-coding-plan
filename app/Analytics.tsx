"use client";

import Script from "next/script";
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

    const clarity = document.createElement("script");
    clarity.async = true;
    clarity.src = "https://www.clarity.ms/tag/xa1t5bx2ge";
    document.head.appendChild(clarity);
  }, []);

  return (
    <Script id="baidu-analytics" strategy="afterInteractive">
      {`
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6d5edd5e985a08af1036d98cca1ee7f2";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
      `}
    </Script>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
