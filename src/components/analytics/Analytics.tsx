import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    ym?: (...args: unknown[]) => void;
  }
}

const GA_SCRIPT_ID = 'ga-script';
const YM_SCRIPT_ID = 'ym-script';

export function Analytics() {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const yandexMetrikaId = import.meta.env.VITE_YANDEX_METRIKA_ID;

  useEffect(() => {
    if (!gaId || document.getElementById(GA_SCRIPT_ID)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', gaId, { send_page_view: false });

    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  }, [gaId]);

  useEffect(() => {
    if (!yandexMetrikaId || document.getElementById(YM_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = YM_SCRIPT_ID;
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(${yandexMetrikaId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        trackHash:true
      });
    `;

    document.head.appendChild(script);
  }, [yandexMetrikaId]);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`;
    const pageUrl = new URL(pagePath, siteConfig.url).toString();

    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: pagePath,
        page_location: pageUrl,
        page_title: document.title,
      });
    }

    if (yandexMetrikaId && window.ym) {
      window.ym(Number(yandexMetrikaId), 'hit', pageUrl, {
        title: document.title,
      });
    }
  }, [gaId, location.pathname, location.search, yandexMetrikaId]);

  return null;
}
