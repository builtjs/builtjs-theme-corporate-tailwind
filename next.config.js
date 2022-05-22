module.exports = {
  images: {
    domains: [
      process.env.BACKEND_DOMAIN || "localhost", 
      "source.unsplash.com"
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "",
    BACKEND_URL: process.env.BACKEND_URL || "",
  }
};
