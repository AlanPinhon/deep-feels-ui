const path = require('path');

const rulesForTS = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

const rules = [ rulesForTS ]

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: {
      type: 'module',
    }
  },
  experiments: {
    outputModule: true,
  },
  module: { rules },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: ['react', 'react-dom'],
};