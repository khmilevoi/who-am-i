const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodemonWebpackPlugin = require("nodemon-webpack-plugin");

module.exports = {
  target: "node",
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonWebpackPlugin({ watch: "./dist" }),
  ],
};
