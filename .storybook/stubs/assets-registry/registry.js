/**
 * Stub for @react-native/assets-registry/registry
 * Provides minimal asset registry functionality for web builds.
 */

const assets = new Map();
let nextAssetId = 1;

export function registerAsset(asset) {
    const id = nextAssetId++;
    assets.set(id, asset);
    return id;
}

export function getAssetByID(assetId) {
    return assets.get(assetId) || null;
}

export default {
    registerAsset,
    getAssetByID,
};
