const amigo_exemplo = {
    usuario: {
        id: 1,
        nome: "João"
    },
    contas: []
};

exports.get = (req, res, next) => {
    const response = req.params.id ? amigo_exemplo : 'retorna todos os amigos';
    res.status(200).send(response);
}

exports.post = (req, res) => {
    res.send('Cadastra um novo amigo para este usuário');
}