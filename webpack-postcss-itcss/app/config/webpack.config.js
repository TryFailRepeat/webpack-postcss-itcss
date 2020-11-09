const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const context = path.join(__dirname, '..', 'src')
const outputpath = path.join(__dirname, '..', 'build')

const MODE = process.env.WEBPACK_MODE
const PORT = process.env.PORT || 9000

// plugins
const plugins = [
  new HtmlWebPackPlugin({
    template: path.join(context, "index.html"),
    filename: path.join(outputpath, "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].main.css',
  }),
  new SVGSpritemapPlugin(path.join(context, '/icons/**/*.svg'), {
    output: {
      filename: 'svg/sprite.svg'
    }
  }),
  new StyleLintPlugin()
]

const developmentPlugins = [
  ...plugins
]

const productionPlugins = [
    ...plugins
]

module.exports = {
  context: context,
  entry: {
    'gui': [
      './css/main.css'
    ]
  },
  output: {
    path: outputpath
  },
  mode: MODE,
  devtool: (MODE === 'production') ? false : 'inline-source-map',
  plugins: (MODE === 'production') ? productionPlugins : developmentPlugins,
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '../../fonts',
        }
      }]
    },
    {
      test: /\.(jpe?g|png|gif|ico)$/i,
      exclude: [
        /node_modules/,
        /svgicons/,
        /teasersprite/,
        /webfonts/
      ],
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: '../images',
        }
      }]
    }]
  },
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    contentBase: path.join(__dirname, '..', 'src'),
    historyApiFallback: true,
    writeToDisk: true,
    inline: true,
    compress: true,
    headers:          { 'Access-Control-Allow-Origin': '*' },
    https:            false,
    disableHostCheck: true
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/
  }
}
