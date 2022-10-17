/** @format */

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { URL } from 'src/lib/server';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        {/* <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={image ? image : '/logo.png'} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:url' content='https://haochen.vercel.app/' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image ? image : '/logo.png'} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='fb:app_id' content='299623688779110' />

      <title>{title.includes('Chen') ? title : title.concat(' | Harry Chen')}</title> */}
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
              url: `/logo.png`,
              width: 1000,
              height: 1000,
              alt: 'My Logo',
            },
            {
              url: `/logo.png`,
              width: 800,
              height: 800,
              alt: 'My Logo Second',
            },
          ],
        }}
        facebook={{ appId: '299623688779110' }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `/logo.png`,
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
