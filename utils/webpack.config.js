const path = require('path')

const config = {
    // devtool: 'source-map',
    entry: {
        core: './utils.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `utils.js`,
        library: 'utils',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.*\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
}

module.exports = config
