// For more info: https://www.npmjs.com/package/path-browserify
const path = require('path');

const devServerConfig = {
    hot: true,
    open: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
};

// For more info:
// Optimization: https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
// splitChuncks: https://webpack.js.org/plugins/split-chunks-plugin/
const optimizationConfig = {
    splitChuncks: {
        chuncks: 'all',
    },
};

// For more info:
// alias: https://webpack.js.org/configuration/resolve/#resolvealias
// fallback: https://webpack.js.org/configuration/resolve/#resolvefallback
// modules: https://webpack.js.org/configuration/resolve/#resolvemodules
const resolveConfig = {
    // configuration options for how webpack resolves modules
    alias: {
        src: path.resolve(__dirname, '../src'),
        'public': path.resolve(__dirname, '../public'),
        'locales': path.resolve(__dirname, '../public/locales'),
        'react': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat', // Must be below test-utils
        'react/jsx-runtime': 'preact/jsx-runtime',
    },
    fallback: {
        'path': require.resolve('path-browserify')
    },
    modules: ['node_modules'],
};

module.exports = {
    devServerConfig,
    optimizationConfig,
    resolveConfig,
};