const path = require("path");

module.exports = {
    entry : "./src/index2.js",
    output : {
        path: path.resolve(".","build"), //folder
        filename : "bundle.js", //file name
    } , 
    mode: "development",
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader','css-loader'] },
          { test: /\.js$/, use: ['babel-loader'] },
        ], 
      },
}