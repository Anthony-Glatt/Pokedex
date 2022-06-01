const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
    devServerConfig,
    entryConfig,
    htmlPluginConfig,
    optimizationConfig,
    outputConfig,
    resolveConfig,
    babelRules,
    styleRulesMe,
    styleRulesThem,
    imagesRules
} = require('./webpack.config.base');

module.exports = {
    mode: 'development',
    // For more info: https://webpack.js.org/configuration/devtool/
    devtool: 'eval-source-map',
    devServer: devServerConfig,
    entry: entryConfig,
    optimization: optimizationConfig,
    output: outputConfig,
    resolve: resolveConfig,
    plugins: [
        // For more info: https://www.npmjs.com/package/dotenv-webpack
        new DotenvWebpackPlugin(),
        // For more info: https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin(htmlPluginConfig),
    ],
    module: {
        rules: [
            babelRules,
            styleRulesMe,
            styleRulesThem,
            imagesRules
        ],
    },
}