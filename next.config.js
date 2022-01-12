module.exports = {
  images: {
    domains: ["localhost", "source.unsplash.com"],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "",
  },
};
