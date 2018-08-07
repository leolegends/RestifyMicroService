const Usuarios = require('./../models/usuarios')


const controller = {

	CadastraUsuarios: (req, res, next) => {
		Usuarios.create({
		nome: req.params.nome,
		sobrenome: req.params.sobrenome,
		telefone: req.params.telefone
		}).then((usuarios) => {
			res.send(usuarios)			
		}).catch((err) => {
			res.send(err)
		})
	}



}

module.exports = controller