module.exports = {
  context: __dirname + "/app",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.txt$/,
        loader: 'raw'
      }
    ]
  }
};
