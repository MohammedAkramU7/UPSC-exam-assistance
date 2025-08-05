/** @type {import('next').NextConfig} */
const nextConfig = {
   
  images: {
    unoptimized: true, // Prevents Next image optimization errors on Netlify
  },
};

export default nextConfig;
