'use strict'

var sum = require('./app') //sum é a variável que recebe o import da função em app.js

console.log(sum(2, 2)) //sum não é o nome da função em app, mas sim da variável que recebeu o import
console.log('webpack está funcionando')
