const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const entries = require('./componentMap');

module.exports = {
    context: path.resolve(__dirname),
    devtool: false,
    entry: entries,
    bail: true,
    mode: 'production',
    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules')
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['babel-preset-env', 'babel-preset-react', 'stage-2', ['env', {loose: true, module: false}]],
                    plugins: ['babel-plugin-transform-object-assign', 'babel-plugin-add-module-exports', 'lodash']
                }
            }
        ]
    },
    output: {
        path: `${__dirname}/build/components/`,
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    plugins: [
        new ProgressBarPlugin(),
        // new BundleAnalyzerPlugin({generateStatsFile: true, analyzerPort: 8998}),
        new FileManagerPlugin({
            // remove build/complete folder before webpack compilation
            onStart: [
                {
                    delete: [
                        './build/components/'
                    ]
                }
            ]
        })
    ]
};
