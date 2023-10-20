const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
						{
							test: /\.svg$/,
							use: ['file-loader']
						},
						{
							test: /\.css$/, 
							use: [
									'style-loader',
									'css-loader',
									{
											loader: 'postcss-loader',
											options: {
													postcssOptions: {
															plugins: [
																	[
																			'autoprefixer',
																			{
																				overrideBrowserslist: ['last 2 versions', 'Chrome >= 60', 'Firefox >= 60']
																			},
																	],
															],
													},
											},
									},
							],
					},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
		mode: 'development',
};
