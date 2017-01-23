/* global module, __dirname */

module.exports = {
    entry: "./public/entry.js",
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: 'source-map'
};
