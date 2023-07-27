const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
// const node: path = require("node:path");
const isProd = process.env.NODE_ENV === "productions";
const isDev = !isProd;
const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    ]
    return loaders
}
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        //sau filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve:{
      extensions: [".js"],
      alias: {
          "@": path.resolve(__dirname, "src"),
          "@core": path.resolve(__dirname, "src/core")
      },
    },
    devtool: isDev ? "source-map" : false,
    devServer: {
        port: 3001,
        hot: isDev,
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "index.html",
                minify: {
                    removeComments: isProd,
                    collapseWhitespace: isProd,
                }
            }
        ),
        new CopyPlugin({
                patterns: [
                    {from: path.resolve(__dirname, "src/favicon.ico"),
                        to: path.resolve(__dirname, "dist")},
                    ]
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
        ],
    },
};