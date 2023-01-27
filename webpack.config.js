const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const chalk = require("chalk")

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/"
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html"
    }),
    new ProgressBarPlugin({
      format:
        chalk.blueBright.bold("Build ➦ ") +
        "[:bar] " +
        chalk.green.bold(":percent") +
        chalk.blueBright.bold("  (:elapsed seconds)"),
      clear: false
    })
  ]
}
