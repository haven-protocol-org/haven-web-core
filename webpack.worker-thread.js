"use strict"

const path = require("path");
const configBase = require("./webpack.base.js");
const VERSION = require('./package.json').version
let configMoneroWebWorker = Object.assign({}, configBase, {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  name: "Haven Node worker config",
  entry: "./src/main/js/common/MoneroWebWorker.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `HavenWorkerThread${VERSION}.js`
  },
});

module.exports = configMoneroWebWorker;