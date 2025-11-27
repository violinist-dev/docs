import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';

// Default implementation, that you can customize
export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();
  const themedImage = siteConfig?.themeConfig?.image ? useBaseUrl(siteConfig.themeConfig.image) : undefined;

  const absoluteImageUrl = themedImage && siteConfig?.url
    ? new URL(themedImage, siteConfig.url).toString()
    : undefined;

  const absolutePageUrl = siteConfig?.url && location?.pathname
    ? new URL(`${location.pathname}${location.search}${location.hash}`, siteConfig.url).toString()
    : undefined;

  return <>
    <Head>
      <meta property="og:type" content="website" />
      {absolutePageUrl && <meta property="og:url" content={absolutePageUrl} />}
      {absoluteImageUrl && <meta property="og:image" content={absoluteImageUrl} />}
    </Head>
    {children}
  </>;
}
