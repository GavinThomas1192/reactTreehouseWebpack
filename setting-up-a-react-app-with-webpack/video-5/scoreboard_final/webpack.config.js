
module.exports = {
  devtool: 'source-map',

  entry: './app.js',

  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  // console.log('inside webpack');
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}

