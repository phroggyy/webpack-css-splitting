const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    test: /\.scss/,
                    chunks: 'all',
                    enforce: true,
                    maxInitialRequests: 10,
                    name(module) {
                        qualifiedFileName = module.resource ? module.resource : module._identifier;

                        return qualifiedFileName.match(/([\w-_]+)\.scss$/)[1];
                    }
                }
            }
        }
    }
}