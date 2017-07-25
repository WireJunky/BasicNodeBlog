const path = require('path');
const webpack = require('webpack'); 

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        client: path.resolve(__dirname, './app/client/index.tsx')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/public/'),
        pathinfo: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        modules: [path.resolve(__dirname,'./app'), path.resolve(__dirname,'./node_modules')]
    },   
    module: {
      rules: [
        {
            test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader'
        },
        { 
          test: /\.tsx?$/, 
          loader: 'ts-loader', 
          options: {
            configFileName:  'client/tsconfig.json',
            logInfoToStdOut: true
          }, 
          exclude: [/node_modules/]
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               use: 'css-loader'
            })
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
            new Visualizer({
                filename: './statistics.html'
            }),
        new HtmlWebpackPlugin({hash:true, template:'app/client/index.ejs'})        
    ]
};
