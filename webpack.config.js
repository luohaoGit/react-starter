module.exports = {
  entry: './assets/app.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  debug: true,
  devtool: "inline-source-map"
};
