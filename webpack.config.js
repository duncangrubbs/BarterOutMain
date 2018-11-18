const webpack = require('webpack');
const { resolve } = require('path');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    // Dumps all code from our index.js plus a bunch of webpack
    // stuff into app.js
    // Not sure if we need all the webpack stuff
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/core/index.js',
    ],
    // Dumps main required react stuff into vendor
    // If you build, you will see app and vendor are massive js files
    vendor: [
      'react',
      'react-dom',
    ],
  },
  mode: 'development',
  output: {
    // Dumps the build into /dist
    path: resolve(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        // Webfont loading
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: 'url-loader',
      }, {
        // Transpiles jsx
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        use: 'babel-loader',
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    // Compresses jpegs
    // Does some other things...
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          // We can adjust this to our liking
          quality: 75,
          progressive: true,
        }),
      ],
    }),
  ],
};
