const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        clean: true,
      },
      devServer: {
        contentBase: './dist',
        hot: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Taboola Widget',
        }),
      ],
      devtool: 'inline-source-map',
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
