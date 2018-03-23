const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true,
      historyApiFallback: true
  },
  resolve: {
      extensions: ['.js', '.jsx', '.less', '.css']
  },
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/,
            use: { loader: "babel-loader" }
        },
        { test: /\.(?:png|jpg|gif|ico)$/, use: 'url-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' }
    ]
    },
    watch: true,
    plugins: [
        new htmlWebpackPlugin({
            title: 'Infinity Modules',
            template: "./index.html"
        })
    ]
};
