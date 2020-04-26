const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
    const isProd = env.mode === 'production';

    const getStyleLoaders = () => {
          return [isProd ? miniCssExtractPlugin.loader : 'style-loader', 'css-loader'];
    };

    const getPlugins = () => {
        const plugins = [
            new htmlWebpackPlugin({
                title: "Hello world",
                template: "./index.html"
            })
        ];

        if (isProd) {
            plugins.push(new miniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
        }

        return plugins;
    };

    return {
        mode: isProd ? "production" : "development",
        entry: './src/index.jsx',
        module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: getStyleLoaders()
            },
            {
                test: /\.(scss|sass)$/,
                use: [...getStyleLoaders(), 'sass-loader']
            },
        ]
    },
        plugins: getPlugins()
    };
};
