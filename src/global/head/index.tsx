import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslate } from "@global/localization";
import { APP_TITLE, AUTHOR, KEYWORDS, OG_LOCALE, SITE_URL } from "./siteConfig";

type Props = {
  /** Page title; " | Portfolio" is appended automatically. */
  title: string;
  description: string;
  /** Social card image — absolute URL or an app-relative "/assets/…" path.
   *  When omitted, og:image / twitter:image are not rendered. */
  imageURL?: string;
  /** Keep this page out of search indexes. */
  noindex?: boolean;
};

/**
 * Per-page document metadata. React 19 natively hoists <title>/<meta>/<link>
 * rendered anywhere in the tree into <head>, so no Helmet/provider is needed.
 * (The inline JSON-LD <script> is not hoisted — it renders in place, which is
 * still valid: crawlers read JSON-LD anywhere in the document.)
 */
const Head = ({ title, description, imageURL, noindex = false }: Props) => {
  const { locale } = useTranslate();
  const { pathname } = useLocation();

  const fullTitle = `${title} | ${APP_TITLE}`;
  const url = `${SITE_URL}${pathname}`;
  const image = imageURL
    ? imageURL.startsWith("http")
      ? imageURL
      : `${SITE_URL}${imageURL}`
    : undefined;

  // React 19 doesn't manage <html lang>; keep it in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="author" content={AUTHOR} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={AUTHOR} />
      <meta property="og:locale" content={OG_LOCALE[locale]} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: fullTitle,
            description,
            url,
            inLanguage: locale,
          }),
        }}
      />
    </>
  );
};

export default Head;
