/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Add a rule to handle SVG files using @svgr/webpack
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  