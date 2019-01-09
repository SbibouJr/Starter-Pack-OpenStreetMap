const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (arg1, env) => {
  const mode = env.mode || 'development';
  return {
    entry: './src/index.js',
    mode,
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name(file) {
                  console.log(file)
                  if (file.match(/(layers-2x\.png|layers\.png|marker-icon\.png|marker-icon-2x\.png|marker-shadow\.png)/)) {
                    return '[name].[ext]'
                  }

                  return '[name]-[hash].[ext]'
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
    },
  };
};
