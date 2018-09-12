const conta_exemplo = {
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
//grupo seria um objeto
//mais de uma pessoa podera pagar (ver isso dps)
//se n houver info de participantes, divide p/ grupo todo

const Conta = require('./conta.model');

exports.get = (req, res, next) => {
    const response = req.params.id ? conta_exemplo : 'retorna todas as contas';
    res.status(200).send(response);
};

exports.post = (req, res) => {
    //res.send('Cadastra uma nova conta');
    const conta = new Conta({
        id: 1,
        descricao: "Conta de Energia",
        valor: 100,
        grupo: "Galera do Lab",
        categoria: "Casa"
    });
    conta.save((err,conta) => {
        if(err) return console.error(err);
        console.log('CONTA SALVA');
    });
    res.send("SALVO NO BANCO");
};