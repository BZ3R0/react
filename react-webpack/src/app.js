'use strict'

var React = require('react')

// function soma(va1, va2){
// 	return va1 + va2
// }
//
// module.exports = soma

var Title = React.createClass({
	render: function(){
		return React.createElement('h1', {className: null}, 'Título')
	}
})

module.exports = Title
