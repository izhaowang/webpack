const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: "[name].[chunkhash].js" 
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:[{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }]
        },{
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        },{
            test: /\.(jpg|png)$/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 8000
                }
            }]
        }]
    },
    plugins:[new htmlWebpackPlugin({
        template:'./src/index.html'
    })]
}