/** @format */

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { URL } from 'src/lib/server';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/logo.png' />
      </Head>
      <DefaultSeo
        title='Chen Chuan Hao'
        defaultTitle={title}
        description={description}
        canonical={URL}
        titleTemplate='%s | Frontend Developer'
        openGraph={{
          type: 'website',
          locale: 'zh_TW',
          url: `${URL}`,
          description: description,
          site_name: title,
          images: [
            {
              url: `${URL}/logo.png`,
              width: 1000,
              height: 1000,
              alt: 'My Logo',
            },
            {
              url: `${URL}/logo.png`,
              width: 800,
              height: 800,
              alt: 'My Logo Second',
            },
          ],
        }}
        facebook={{ appId: '299623688779110' }}
        twitter={{
          handle: '@HarryChen824',
          site: '@HarryChen824',
          cardType: 'app',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${URL}/logo.png`,
          },
        ]}
      />
    </>
  );
};

Meta.defaultProps = {
  title: 'Chen Chuan Hao | Frontend Developer',
  keywords: 'Chen Chuan Hao, Harry, Portfolio, Frontend, Developer',
  description: 'My portfolio',
};

export default Meta;
