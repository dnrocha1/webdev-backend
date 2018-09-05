const grupo_exemplo = {
    id: 1,
    nome: "Galera do Lab",
    categoria: "Empresa",
    membros: [
        {id: 1, nome: "João"},
        {id: 2, nome: "Maria"},
        {id: 3, nome: "Felipe"}
    ],
};

exports.get = (req, res, next) => {
    const response = req.params.id ? grupo_exemplo : 'retorna todos os grupos';
    res.status(200).send(response);
};

exports.post = (req, res) => {
    res.send('Cadastra um novo grupo');
};