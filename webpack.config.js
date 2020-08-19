const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      custom: path.resolve(__dirname, 'src/custom/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(svg|png|ico|mp3|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};
