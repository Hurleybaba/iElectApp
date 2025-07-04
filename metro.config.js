const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  defaultConfig.resolver.sourceExts.push("cjs");

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      assetExts: [...defaultConfig.resolver.assetExts, "bin"],
    },
  };
})();
