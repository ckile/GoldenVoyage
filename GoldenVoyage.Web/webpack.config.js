var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var outPath = "./wwwroot";
var src = "./src";
var css = "./css";

module.exports = {
    entry: {
        "app": src + "/app.boot.ts",
        "vendor": src + "/vendor.ts"
    },
    output: {
        path: outPath + "/js",
        filename: "[name].js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            toastr: "toastr"
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new ExtractTextPlugin("sytle.css", {
            allChunks: true
        })
    ],
    resolve: {
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: "ts-loader" },
          {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
          },
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
          }
        ],
        noParse: [path.join(__dirname, 'node_modules', 'bundles', './src', 'zone.js')]
    }
};