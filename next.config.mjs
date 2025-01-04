/** @type {import('next').NextConfig} */
const nextConfig = {
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
      ]
    },
  };
  
  export default nextConfig;
  