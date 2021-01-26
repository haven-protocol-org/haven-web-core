"use strict"

const path = require("path");
const configBase = require("./webpack.base.js");

let configMoneroWebWorker = Object.assign({}, configBase, {
  name: "Haven bundle config",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "haven.js"
  },
});

module.exports = configMoneroWebWorker;