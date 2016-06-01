var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var src = "./src";
var wwwroot = "./wwwroot";
var tmpls = wwwroot + "/tmpls";

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("build", ["component:build", "webpack:build"]);

// 编译组建html
gulp.task("component:build", function () {
    gulp.src(src + "/**/*.html")
		.pipe(gulp.dest(tmpls));
});

gulp.task("webpack:build", function (callback) {
    var myConfig = Object.create(webpackConfig);
    //myConfig.plugins = myConfig.plugins.concat(
    //    		new webpack.DefinePlugin({
    //    		    "process.env": {
    //    		        // This has effect on the react lib size
    //    		        "NODE_ENV": JSON.stringify("production")
    //    		    }
    //    		}),
    //	new webpack.optimize.DedupePlugin(),
    //	new webpack.optimize.UglifyJsPlugin()
    //    );
    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});