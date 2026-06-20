import type { Metadata } from "next";
import "./globals.css";
import site from "../site.config.json";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: `${site.title} ｜ ${site.subtitle}`,
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVBZJF8PQS"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BVBZJF8PQS');
        ` }} />
        <script dangerouslySetInnerHTML={{ __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement('script');
            hm.src = 'https://hm.baidu.com/hm.js?6d5edd5e985a08af1036d98cca1ee7f2';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(hm, s);
          })();
        ` }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, 'clarity', 'script', 'xa1t5bx2ge');
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
