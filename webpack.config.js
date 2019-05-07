const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const webpackConfig = (env, argv) => ({
    entry: "./src/scripts/main.js",
    output: {
        path: path.join(__dirname, "./public"),
        filename: "js/bundle.[hash].min.js"
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/plugin-proposal-object-rest-spread"],
                }
            }
        },
        {
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, "css-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "./public"),
        publicPath: "/"
    },
    devtool: (argv.mode === 'production') ? false : "cheap-module-eval-source-map",
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "template/index.html",
            inject: "head"
        }),
        new MiniCSSExtractPlugin({
            filename: "css/bundle.[hash].min.css"
        })
    ],
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: { output: { comments: false } }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                }
            })
        ]
    }
});

module.exports = webpackConfig;