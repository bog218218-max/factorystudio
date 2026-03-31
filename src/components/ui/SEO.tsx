import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

export function SEO({ title, description, image = siteConfig.ogImage, type = 'website', noIndex = false }: SEOProps) {
  const location = useLocation();
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const canonicalUrl = new URL(`${location.pathname}${location.search}`, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
