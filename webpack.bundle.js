"use strict"

const path = require("path");
const configBase = require("./webpack.base.js");

let configMoneroWebWorker = Object.assign({}, configBase, {
  name: "Haven bundle config",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
<<<<<<< HEAD
    filename: "bundle.js"
=======
    filename: "haven.js"
>>>>>>> pr/1
  },
});

module.exports = configMoneroWebWorker;