const webpack = require("webpack");
const helpers = require("./helpers");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkCheckerPlugin = require("awesome-typescript-loader").ForkCheckerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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

    resolve: {
        extensions: ["", ".ts", ".js", ".css", ".scss"],
        root: helpers.root("src"),
        modulesDirectories: ["node_modules", "bower_components"]
    },

    module: {
        preLoaders: [
              {
                  test: /\.js$/,
                  loader: 'source-map-loader',
                  exclude: [ 
                    helpers.root('node_modules/rxjs')
                  ]
              }
        ],

        loaders: [
          {
              test: /\.ts$/,
              loader: "awesome-typescript-loader",
              exclude: [/\.(spec|e2e)\.ts$/]
          },
          {
              test: /\.json$/,
              loader: "json-loader"
          },
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
          {
              test: /\.html$/,
              loader: 'raw-loader',
              exculde: [helpers.root("Views/Shared/index.cshtml")]
          },

        ],
    },


    plugins: [
        new ExtractTextPlugin('initial.css', {
            allChunks: true
        }),

        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),

        new ForkCheckerPlugin(),

        new webpack.optimize.OccurenceOrderPlugin(true),

        new webpack.optimize.CommonsChunkPlugin({
            name: helpers.reverse(['polyfills', 'vendor'])
        }),

        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),

        new HtmlWebpackPlugin({
            template: 'Views/Shared/_Layout.cshtml',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main']),
            //filename: "../Views/Shared/_Layout.cshtml"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "Tether": "tether",
            "window.Tether": "tether"
        })

    ],

    node: {
        global: 'window',
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};