"use strict"

const path = require("path");
const configBase = require("./webpack.base.js");
const VERSION = require('./package.json').version
let configMoneroWebWorker = Object.assign({}, configBase, {
  target: "webworker",
  node: {
    __filename: false,
    __dirname: false,
  },
  name: "Haven web worker config",
  entry: "./src/main/js/common/MoneroWebWorker.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `HavenWebWorker${VERSION}.js`
  },
});

module.exports = configMoneroWebWorker;