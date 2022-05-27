const {
    devServerConfig,
    optimizationConfig,
    outputConfig,
    resolveConfig,
} = requre('./webpack.config.base');

module.exports = {
    mode: 'development',
    // For more information https://webpack.js.org/configuration/devtool/
    devtool: 'eval-source-map',
    devServer: devServerConfig,
    optimization: optimizationConfig,
    output: outputConfig,
    resolve: resolveConfig,
}