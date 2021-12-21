const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
//const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => ({
  devtool: "inline-source-map",
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(env.API_URL),
    }),
  //  new MiniCssExtractPlugin({ filename: 'bundle.css' }),
  //  new CompressionPlugin(),
  ],
  entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build', 'client'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      /*
      {
        test: /\.(js|jsx)?$/,
        include: path.resolve(__dirname, 'client', 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      /*
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'client', 'src'),
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
       */
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
});