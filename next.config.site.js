// If nothing in environment variables, will default back to local settings
const DEFAULT_BACKEND_DOMAIN = 'localhost';
const DEFAULT_BACKEND_URL = `http://${DEFAULT_BACKEND_DOMAIN}:1337`;
const DEFAULT_API_URL = `${DEFAULT_BACKEND_URL}/api`;

module.exports = {
  images: {
    domains: [
      process.env.BACKEND_DOMAIN || DEFAULT_BACKEND_DOMAIN
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || DEFAULT_API_URL,
    BACKEND_URL: process.env.BACKEND_URL || DEFAULT_BACKEND_URL,
  }
};
