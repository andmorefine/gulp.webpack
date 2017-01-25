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

// module.exports = {
//     entry: {
//         "indexEntry": './public/entry2.js',
//         "contentEntry": './public/content.js',
//     },
//     output: {
//         path: "./public/",
//         filename: "[name].js"
//     }
// };

// module.exports = {
//     entry: {
//         "vendor": ['jquery','./public/js/analytics.js','./public/js/optimizely.js'],
//         "index": './public/entry2.js',
//         "profile": './public/content.js',
//     },
//     output: {
//         path: "./public/",
//         filename: "[name].js"
//     }
// };
