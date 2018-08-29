const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))


/**
 * Grupos
 */
app.get('/grupo', (req, res) => res.send('Retorna todos os grupos que o usuário faz parte.'))
app.get('/grupo/id', (req, res) => res.send('Retorna as informações de um grupo especifico que o usuário faz parte.'))
app.post('grupo', (req, res) => res.send('Cadastra um novo grupo'))

/**
 * Amigos
 */
app.get('/amigo', (req, res) => res.send('Retorna a lista de todos os amigos deste usuário'))
app.get('/amigo/id', (req, res) => res.send('Retorna as informações de gasto deste usuário com um amigo especifico.'))
app.post('/amigo', (req, res) => res.send('Cadastra um novo amigo para este usuário'))

/**
 * Conta
 */
app.get('conta', (req, res) => res.send('Retorna a lista de contas deste usuário (atividades dele com grupos e com outros amigos)'))
app.get('/conta/id', (req, res) => res.send('Retorna as informações de uma conta específica que o usuário possui'))
app.post('/conta', (req, res) => res.send('Cadastra uma nova conta'))



app.listen(3000, () => console.log('Example app listening on port 3000!'))
