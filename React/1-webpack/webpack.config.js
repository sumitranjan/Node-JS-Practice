const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path: path.resolve(".","build"), //folder
        filename : "bundle.js", //file name
    } , 
    mode: "development",
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader','css-loader'] },
        ], 
      },
}