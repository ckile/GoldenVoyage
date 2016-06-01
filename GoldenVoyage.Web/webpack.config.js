var webpack = require("webpack");
var path = require("path");
var outPath = "./wwwroot";
var src = "./src";

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
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ],
    resolve: {
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: "ts-loader" },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.css$/, loader: 'style-loader!css-lader' }
        ],
        noParse: [path.join(__dirname, 'node_modules', 'bundles', './src', 'zone.js')]
    }
};