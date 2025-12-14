export const handleAsset = (path: string) => {
  // If it's a URL, return as is
  if (path.startsWith("http")) {
    return path;
  }
  // If it's a local asset, resolve it
  if (path.startsWith("./")) {
    try {
      const assets = {
        "./assets/favicon.png": require("../assets/favicon.png"),
        "./assets/lottieAnimation.json": require("../assets/lottieAnimation.json"),
        // Add more known assets here if needed
      };
      return assets[path];
      // return require(path);
    } catch (e) {
      // console.warn('Failed to load asset:', path, e);
      return null;
    }
  }
  // For other paths (like resources/), you might want to add specific handling
  return path;
};
