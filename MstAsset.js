const { Asset } = require("parcel");
const Path = require("path");

class SimpleStringAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
    this.defaultConfig = {
      minify: false,
    };
  }

  getConfig() {
    try {
      const userConfig = require(Path.join(process.cwd(), ".rawMst.js"));
      if (userConfig && typeof userConfig === "object") {
        return Object.assign({}, this.defaultConfig, userConfig);
      }
    } catch (error) {
      // No user config
    }
    return this.defaultConfig;
  }

  minify(contents) {
    return contents.replace(/\s+/g, " ");
  }

  generate() {
    const config = this.getConfig();
    let contents = this.contents;

    if (config.minify) {
      contents = this.minify(contents);
    }

    return { js: `module.exports = ${JSON.stringify(contents)};` };
  }
}

module.exports = SimpleStringAsset;
