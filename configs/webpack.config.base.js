// For more info: https://www.npmjs.com/package/path-browserify
const path = require('path');

const rJS = /\.js$/;
const rCSS = /\.css$/;
const rNode = /node_modules/;
const rStyle = /\.(scss|sass|css)$/;
const rImage = /\.(png|jp(e*)g|svg|gif)$/;

const devServerConfig = {
    hot: true,
    open: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
};

const entryConfig = path.resolve(__dirname, '../src/index.js');

const htmlPluginConfig = {
    title: 'Pokedex',
    template: path.join(__dirname, '../public/index.html'),
    publicPath: '/',
};

// For more info:
// Optimization: https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
// splitChuncks: https://webpack.js.org/plugins/split-chunks-plugin/
const optimizationConfig = {
    splitChunks: {
        chunks: 'all',
    },
};

// For more info: https://webpack.js.org/configuration/output/
// const outputConfig = {
//     path: path.resolve(__dirname, '../dist'),
// };

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

const babelRules = {
    test: rJS,
    exclude: [rNode],
    use: ['babel-loader'],
};

const styleRulesMe = {
    test: rStyle,
    exclude: rNode,
    use: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader',
    ],
};

const styleRulesThem = {
    test: rCSS,
    exclude: rNode,
    use: [ 'style-loader', 'css-loader'],
};

const imagesRules = {
    test: rImage,
    // type: 'asset/inline'
};

module.exports = {
    devServerConfig,
    entryConfig,
    htmlPluginConfig,
    optimizationConfig,
    resolveConfig,
    babelRules,
    styleRulesMe,
    styleRulesThem,
    imagesRules,
};