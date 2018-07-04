let path = require('path');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
        loader: 'babel-loader'
			},
      {
        test: /\.css$/,
      	use: [
	      	{loader: 'style-loader'},
	      	{loader: 'css-loader'}
      	]
      }
		]
	}
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    config.devtool = production ? false : 'eval-sourcemap';

    return config 
};