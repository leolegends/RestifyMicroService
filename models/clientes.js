const mongoose = require('mongoose')

Schema = mongoose.Schema;

let Clientes = new Schema({
	nome: String,
	cnpj_cpf: Number,
	usuario_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Usuarios',
		required: true

	},
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model('Clientes', Clientes)