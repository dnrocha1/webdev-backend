/* const conta_exemplo = {
    id: 1,
    descricao: "Conta de Energia",
    valor: 100,
    date: '30/08/2018',
    grupo: "Galera do Lab",
    categoria: "Casa",
    participantes: [
        {id: 1, nome: "João"},
        {id: 2, nome: "Maria"},
        {id: 3, nome: "Felipe"}
    ],
    realizou_pgto: {
        id: 1, 
        nome: "João"
    }
};
*/
//grupo seria um objeto
//mais de uma pessoa podera pagar (ver isso dps)
//se n houver info de participantes, divide p/ grupo todo

const Conta = require('./conta.model');

function getConta(req, res) {
    Conta.find()
        .then(contas => res.json(contas))
        .catch(err => res.send(err));
}

function getContaById(req, res) {
    Conta.findById(req.params.idConta)
        .then(conta => res.json(conta))
        .catch(err => res.send(err));
}

function novaConta(req, res) {
    const conta = new Conta(req.body);

    conta.save()
        .then(() => {res.send(conta)})
        .catch(err => res.send(err));
}

module.exports = {getConta, getContaById, novaConta};