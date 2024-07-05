var path = require("path");

var webpackConfig = {
  mode: "production",
  entry: {
    spider: "./src/spider.js",
  },
  devServer: {
    static: __dirname,
    server: {
      type: 'https',
    },
  },
  output: {
    filename: "bundle.js",
    path: path.join(path.resolve(__dirname), "/dist"),
    library: "[name]",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js",".jsx"],
    modules: [path.join(__dirname, "../src"), "node_modules"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["to-string-loader", "css-loader"] },
    ],
  },
  cache: {
    type: 'filesystem', // Use 'memory' for smaller projects
  },
  stats: {},
};

module.exports = webpackConfig;
