const mongoose = require('mongoose')

const Usuarios = mongoose.Schema({
	nome: String,
	sobrenome: String,
	telefone: Number,
	Date: {
		type: Date,
		default: Date.now
	}
})


module.exports = mongoose.model('Usuarios', Usuarios)
