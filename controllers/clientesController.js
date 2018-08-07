var Clientes = require('./../models/clientes')


const controller = {

	CadastraClientes: (req, res, next) => {

		if(typeof req.params == 'undefined'){
			res.send(500, {status: 500, msg: 'Indefinido'})
			return;
		}


		if(typeof req.params.nome == 'undefined'){
			res.send({
				msg: "campo nome nao preenchido"
			})
			return
		}

		if(typeof req.params.cnpj_cpf == 'undefined'){
			res.send({
				msg: "campo cnpj_cpf nao preenchido"
			})
			return
		}


		if(req.params.cnpj_cpf == ""){
			res.send({
				msg: "campo cnpj_cpf nao preenchido"
			})
			return
		}


		if(typeof req.params.usuario_id == ""){
			res.send({
				msg: "campo usuario_id nao preenchido"
			})
			return
		}

		if(req.params.nome == ""){
			res.send({
				status: 404,
				msg: "campo nome não preenchido"
			})
			return
		}

		let cnpj_cpf = req.params.cnpj_cpf
		let nome = req.params.nome
		let usuario_id = req.params.usuario_id

		Clientes.create({
			nome: nome,
			cnpj_cpf: cnpj_cpf,
			usuario_id: usuario_id
		}).then((cliente) => {
			res.send(cliente)			
		})
	
	},

	EditaCliente: (req, res, next) => {
		Clientes.findByIdAndUpdate(req.params.id, {
			nome: req.params.nome,
			cnpj_cpf: req.params.cnpj_cpf
		}).then((cliente) => {
			res.send(200, {status: 200, msg: "atualizado com sucesso"})
		}).catch((err) => {
			res.send(err)
		})
	},

	DeletaCliente: (req, res, next) =>{
		Clientes.findOneAndRemove({
			_id: req.params.id
		}).then((cliente) => {
			if(cliente == null){
				res.send(404, {status: 404, msg: "nada encontrado"})
			}
			res.send(cliente);
		}).catch((err) => {
			res.send(500, {status: 500, msg: "error"})
		})

	},

	ListaClientes: (req, res, next) => {
	
	 Clientes.find().populate('usuario_id').then((usuarios) => {

	 	res.send(usuarios)

	 })

	}
}
module.exports = controller