const usuarios = require('./../controllers/usuariosController')
const clientes = require('./../controllers/clientesController')

module.exports = (server) => {

	/* Rota HOME */

	server.get('/', (req, res, next) => {
		res.send(200, {
			status: 200,
			msg: {
				saudacao: "Olá, seja bem vindo ao RestifyAPI",
				mensagem: "Suas configuracoes sao facilmente manipuladas",
				estrutura: "Feito em MVC, para Ajudar voce!"
			},
			author: {
				desenvolvedor: "Leonardo Ribeiro",
				github: "https://github.com/leolegends"
			
			}
		})
	})

	// CLIENTES

	server.get('/clientes', clientes.ListaClientes);
	server.post('/clientes', clientes.CadastraClientes);
	server.del('/clientes/:id', clientes.DeletaCliente);
	server.put('/clientes', clientes.EditaCliente);

	// USUARIOS

	server.post('/usuarios', usuarios.CadastraUsuarios);
}