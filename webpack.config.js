const path = require('path');

const rulesForTS = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

const rules = [ rulesForTS ]

module.exports = [
  {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: { rules },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
  },
];