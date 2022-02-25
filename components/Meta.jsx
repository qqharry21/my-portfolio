/** @format */

import Head from 'next/head';

const Meta = ({ title, description = 'Portfolio', subtitle = 'Hao Chen' }) => {
  return (
    <Head>
      <title>
        {title && title + ' | '} {subtitle}
      </title>
      <meta name='description' content={`${title} - ${description}`} />
      <meta property='og:title' content={`${title} | ${subtitle}`} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.png' />
    </Head>
  );
};

export default Meta;
