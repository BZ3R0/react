'use strict'

const path = require('path')

//__dirname serve reconhecer o sistema operacional e utilizar a barra correta para cada sistema.
//entry é o arquivo de entrada para o bundle.
//output é o arquivo gerado após o bundle a partir de entry.
//publicPath é o local onde o webpack do webserver vai ficar assistindo o arquivo de desenvolvimento.
module.exports = {
	entry: path.join(__dirname, 'src', 'index'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	}
}
