module.exports = {
  entry: './src/index.js',
  output: {
    path: '.',
    filename: 'script.js'
  },
  module:{
    loaders: [
      {
        test: /.json?/,
        loader: 'json-loader',
      },
    ]
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}