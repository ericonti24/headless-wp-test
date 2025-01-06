/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Add your environment variable here
    WORDPRESS_URL: process.env.WORDPRESS_URL || "https://fallbackurl.com",
  },
    async rewrites() {
      return [
        {
          source: '/sample',
          destination: '/Pages/Sample', // Adjust this path if necessary
        },
        {
            source: '/about',
            destination: '/Pages/About', // Adjust this path if necessary
          },
          {
            source: '/posts/:slug',
            destination: '/Post/:slug',
          },
      ]
    },
  };
  
  export default nextConfig;
  