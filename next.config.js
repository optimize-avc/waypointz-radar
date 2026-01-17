// next.config.js - Cesium integration for WayPointz
const path = require("path");

const CESIUM_BASE_URL = "cesium";

module.exports = {
  reactStrictMode: true,
  
  env: {
    NEXT_PUBLIC_CESIUM_BASE_URL: CESIUM_BASE_URL
  },
  
  webpack: (config, { isServer }) => {
    // Cesium path alias
    config.resolve.alias = {
      ...config.resolve.alias,
      cesium: path.resolve(__dirname, "node_modules/cesium")
    };
    
    // Handle CSS
    config.module.rules.push({
      test: /\.css$/,
      sideEffects: true
    });
    
    // Handle Cesium assets
    config.module.rules.push({
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      type: "asset/resource"
    });
    
    // Fix for server-side rendering
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    return config;
  }
};
