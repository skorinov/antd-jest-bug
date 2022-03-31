const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const path = require('path');

const lessModifyVars = {};

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src')
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: lessModifyVars,
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, _context) {
          lessRule.test = /\.less$/;
          lessRule.exclude = /\.module\.less$/;
          return lessRule;
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: lessModifyVars,
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, _context) {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = undefined;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
      },
    },
  ],
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
    },
  },
};
