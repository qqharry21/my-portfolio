/** @format */

import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, keywords, description, image }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
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

      <title>{title.includes('Chen') ? title : title.concat(' | Harry Chen')}</title>

      <link rel='icon' href='/logo.png' />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Harry Chen - FullStack Developer',
  keywords: 'web development, programming, web design, react js, tailwindcss, next js',
  description: 'Software Engineer. Lover of web and opensource.',
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
