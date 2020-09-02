module.exports = async function (bundler) {
  bundler.addAssetType("mst", require.resolve("./MstAsset.js"));
};
