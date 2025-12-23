// src/components/SEO.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image, article = false }) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://vinitlimkar.com';
  const defaultTitle = 'Vinit Limkar | AI & Machine Learning Engineer';
  const defaultDescription = 'AI & Machine Learning Engineer specializing in NLP, Computer Vision, and Deep Learning. Building intelligent solutions to real-world problems.';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const seo = {
    title: title ? `${title} | Vinit Limkar` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = seo.description;
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Update Open Graph / Facebook
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = seo.title;
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = seo.description;
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = seo.url;
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = seo.image;
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = article ? 'article' : 'website';
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    // Update Twitter
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = seo.title;
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = seo.description;
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]') || document.createElement('meta');
    twitterImage.name = 'twitter:image';
    twitterImage.content = seo.image;
    if (!document.querySelector('meta[name="twitter:image"]')) {
      document.head.appendChild(twitterImage);
    }

  }, [seo, article]);

  return null;
};

export default SEO;