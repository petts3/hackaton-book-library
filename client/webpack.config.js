var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src', 'index')
    ],
    output: {
        path: __dirname,
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.i18n\.json$/,
                loaders: ['json']
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/react-dates/css')],
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            }
        ]
    }
};
