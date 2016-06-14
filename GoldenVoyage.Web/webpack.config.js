const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var outPath = "./wwwroot";
var src = "./src"; 

const METADATA = {
    title: "Gv Hotel Manager",
    description: "金航酒店管理平台",
    baseUrl: "/"
};

module.exports = {
    metadata: METADATA,
    entry: {
        "polyfills": src + "/polyfills.ts",
        "vendor": src + "/vendor.ts",        
        "app": src + "/app.boot.ts"
    },
    output: {
        path: outPath + "/js",
        filename: "[name].bundle.js",
        /**
         * The filename of the SourceMaps for the JavaScript files.
         * They are inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
         */
        sourceMapFilename: '[name].map',
        /** The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
        chunkFilename: '[id].chunk.js'

    },
    plugins: [
        new ExtractTextPlugin('initial.css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            toastr: "toastr"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "polyfills"]
        }),
          /*
         * Plugin: CopyWebpackPlugin
         * Description: Copy files and directories in webpack.
         *
         * Copies project static assets.
         *
         * See: https://www.npmjs.com/package/copy-webpack-plugin
         */
        new CopyWebpackPlugin([{
            from: src + '/assets',
            to: outPath + '/assets'
        }])

    ],
    resolve: {
        extensions: ["", ".ts", ".js", ".css", ".scss"]
    },
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: "awesome-typescript-loader"
          },
          {
              test: /\.json$/,
              loader: "json-loader"
          },
           /*
           * Raw loader support for *.css files
           * Returns file content as string
           *
           * See: https://github.com/webpack/raw-loader
           */
          {
              test: /\.css$/,
              loader: 'raw-loader'
          },
          {
              test: /\.scss$/,
              loaders: ['raw-loader', 'sass-loader']
          },
          {
              test: /initial\.scss$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
          },
          {
              test: /\.woff(2)?(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          },

          {
              test: /\.(ttf|eot|svg)(\?v=.+)?$/, loader: 'file-loader'
          },

          {
              test: /bootstrap\/dist\/js\/umd\//,
              loader: 'imports?jQuery=jquery'
          },
       /* Raw loader support for *.html
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      {
          test: /\.html$/,
          loader: 'raw-loader'
      },

        ],

        /**
         * Static analysis linter for TypeScript advanced options configuration
         * Description: An extensible linter for the TypeScript language.
         *
         * See: https://github.com/wbuchwalter/tslint-loader
         */
        tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
        },

        noParse: [path.join(__dirname, 'node_modules', 'bundles', './src', 'zone.js')]
    }
};