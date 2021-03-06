// @file config.js
var path = require('path');

var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ

var relativeSrcPath = path.relative('.', src);

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  },
    stylus: {
        src: [  // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良い
            src + '/styl/**/!(_)*'  // ファイル名の先頭がアンスコはビルド対象外にする
        ],
        dest: dest + '/css/',
        output: 'app.css',  // 出力ファイル名
        autoprefixer: {
            browsers: ['last 2 versions']
        },
        minify: false
    },
    watch: {
      js: relativeSrcPath + '/js/**',
      styl: relativeSrcPath + '/styl/**',
      www: './'
    }
}
