/**
 * @format
 * @type {import('next').NextConfig}
 */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_API: 'service_oytly1x',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'template_bndikxb',
    NEXT_PUBLIC_EMAILJS_USER_API: 'user_SL4FpzBwIIqUtnw5gCT9x',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n,
};

module.exports = nextConfig;
