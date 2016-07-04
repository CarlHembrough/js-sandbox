module.exports = {
  entry: "./js/app.jsx",
  output: {
    filename: "app/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }, // use json loader for json files
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' } // tell webpack to use jsx-loader for all *.jsx files
    ],
    noParse: [
      /node_modueles\/json-schema\/lib\/validate\.js/, // json-schema caused error in webpack build, so do not parse it.
      /node_modules\\json-schema\\lib\\validate\.js/  // and if your crazy enough to use Windows :)
    ]
  },
  node: {
    console: true, // enable console method calls.
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    //'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    /* Send API requests on localhost to API server get around CORS */
    hot: true,
    proxy: { // proxy zebedee requests to zebedee
      '/zebedee*': {
        target: 'http://localhost:8082',
        secure: false,
        rewrite: function(req) {
          req.url = req.url.replace(/^\/zebedee/, '');
        }
      }
    }
  }
}
