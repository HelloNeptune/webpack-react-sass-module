/**
 * Created by A.Burak ABDIKOGLU on 28.03.2017.
 *
 */

/****************************
 *  PLUGINS -->
 *
 * @type {HtmlWebpackPlugin}
 */
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path              = require( 'path' );


/****************************
 *  PLUGINS SETTINGS -->
 */
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const SassExtract = new ExtractTextPlugin('[name].css');

/****************************
 *  BEGIN PACKING -->
 */
const webpack =
{
    /*************************/
    entry: "./app/js/app.js",
    /*************************/
    output:
    {
        filename: "app/source/bundle.js",
        path: __dirname + "/public"
    },
    /*************************/
    resolve:
    {
        extensions: [ '.js', '.jsx', '.json' ]
    },
    /*************************/
    plugins:
    [ HTMLWebpackPluginConfig, SassExtract ],
    /*************************/
    devServer:
    {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 80
    },
    /*************************/
    module:
    {
        rules:
        [{
            test: /\.jsx?$/,
            exclude: [ path.resolve( __dirname, '/node_modules/') ],
            use: 'babel-loader'
        },
        {
            test: /\.(scss|sass)?$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:
                [{
                    loader: 'css-loader',
                    query:
                    {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[hash:base64:24]'
                    }
                }, 'postcss-loader', 'sass-loader' ]
            })
        }],
    },
};

module.exports = webpack;

