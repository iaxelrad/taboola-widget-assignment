const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
  const isDevBuild = !(env && env.prod);
  return [
    {
      mode: 'development',
      entry: {
        index: './src/index.js',
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
      },
      devServer: {
        contentBase: './dist',
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Taboola Widget',
        }),
        new CopyPlugin({
          patterns: [{ from: 'widget/index.html', to: '/dist' }],
        }),
      ],
      module: {
        rules: [
          { test: /\.html$/i, use: 'html-loader' },
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              'css-loader' + (isDevBuild ? '' : '?minimize'),
            ],
          },
        ],
      },
    },
  ];
};
