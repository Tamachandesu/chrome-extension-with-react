"use strict";

const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  devtool: "inline-source-map",

  // The application entry point
  entry: {
    popup: path.join(__dirname, "src/components/index.tsx"),
    event: path.join(__dirname, "src/event.ts")
  },
  // Where to compile the bundle
  output: {
    filename: "[name].js"
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    // copy static files
    new CopyWebpackPlugin(
      [
        {
          context: "public",
          from: "**/*",
          to: path.resolve(__dirname, "dist")
        },
      ]
    ),
    new WriteFilePlugin(),
  ],

  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};