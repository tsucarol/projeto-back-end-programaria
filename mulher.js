const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: "Sabrina de Souza Anchieta",
    imagem: "https://media.licdn.com/dms/image/D5603AQFLZ40RSDolOg/profile-displayphoto-shrink_200_200/0/1675554937146?e=1686787200&v=beta&t=W_lcZ610vbYQF1tJmutjBlhJ4gv58-Z9yuq7GB7Z-ZQ",
    minibio: "Estudante de Design e Desenvolvimento Front-end"
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)