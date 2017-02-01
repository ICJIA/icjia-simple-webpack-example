
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: 'build.js'
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },

    ]
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


// only run if in 'production mode'
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // remove ./dist directory on build
    new CleanWebpackPlugin(['./dist']),

    // uglify/minimize javascript
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    // create index.html file in ./dist/ directory. Use the index.html template in root.
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, './index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
