import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export function SiteSchema() {
  const location = useLocation();
  const pageUrl = new URL(`${location.pathname}${location.search}`, siteConfig.url).toString();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.addressLine,
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: 'ru-RU',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: document.title,
      url: pageUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ];

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
