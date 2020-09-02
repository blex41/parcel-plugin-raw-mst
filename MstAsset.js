const { Asset } = require("parcel");

class SimpleStringAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
  }

  generate() {
    return { js: `module.exports = ${JSON.stringify(this.contents)};` };
  }
}

module.exports = SimpleStringAsset;
