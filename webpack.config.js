const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template:'./src/index.html'})],
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      },


}