const webpack = require("webpack");
const helpers = require("./helpers");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkCheckerPlugin = require("awesome-typescript-loader").ForkCheckerPlugin;
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
            name: helpers.reverse(['polyfills', 'vendor'])
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
            from: 'src/assets',
            to: 'assets'
        }]),
        /* 将包直接插入引用的文件
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: 'Views/Shared/_Layout.cshtml',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main']),
            //filename: "../Views/Shared/_Layout.cshtml"
        })

    ],

    resolve: {
        extensions: ["", ".ts", ".js", ".css", ".scss"],
        root: helpers.root("src"),
        modulesDirectories: ["node_modules", "bower_components"]
    },

    module: {
        preLoaders: [

               /*
               * Source map loader support for *.js files
               * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
               *
               * See: https://github.com/webpack/source-map-loader
               */
              {
                  test: /\.js$/,
                  loader: 'source-map-loader',
                  exclude: [
                    // these packages have problems with their sourcemaps
                    helpers.root('node_modules/rxjs')
                  ]
              }
        ],

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