var path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      library: 'index',
      globalObject: "this",
      libraryTarget: 'commonjs2'
    },
    externals: {
      react: 'commonjs react',
     'react-dom': 'commonjs react-dom',
   },
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx)$/,
          include: path.join(__dirname, 'src'),
          exclude: path.join(__dirname, '/node_modules/'),
          loader: 'babel-loader',
        }
      ],
    },
    resolve: {
      extensions: ['.jsx', '.ts', '.js','.tsx']
    },
  };