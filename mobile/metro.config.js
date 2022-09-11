const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver = {
  blacklistRE: /#current-cloud-backend\/.*/,
};
config.transformer = {
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: false,
    },
  }),
  assetPlugins: ["expo-asset/tools/hashAssetFiles"],
};

module.exports = config;
