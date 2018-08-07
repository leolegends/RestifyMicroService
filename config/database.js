const mongoose = require('mongoose');

/* MONGO CONNECT */


const database = "restify"

mongoose.connect('mongodb://mongodb:27017/' + database, {useNewUrlParser: true})

let db = mongoose.connection

db.on('error', (err) => {
	console.log("Falha ao conectar ao mongo." + err)
})

db.on('open', () => {
	console.log("Conectado com sucesso!")
})
