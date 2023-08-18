const db = require('../models/index');
const Cadastros = db.cadastros;
const Op = db.Sequelize.Op;
var Sequelize = require("sequelize");

exports.create = (req, res) => {
    let validate = validatePayload(req.body)
    if (validate !== true) {
        res.status(400).send({ message: validate });
        return;
    }

    let cadastro = payloadToJSON(req.body)

    Cadastros.create(cadastro).then(data => {
        res.status(201).send({ id: data.id, nome: data.nome, message: "Cadastros finalizado com sucesso!" })
    }).catch(err => {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(202).send({
            message: errObj || "Não foi possivel finalizar o cadastro, tente novamente mais tarde!"
        });
    });
};

exports.findAll = (req, res) => {
    let whereConditional = [];
    let where = whereConditional || null;

    Cadastros.findAll({
        where: where,
        order: [
            ['id', 'ASC']
        ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cadastros."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Cadastros.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: `Não foi possível encontrar Cadastros com o id#${id}` });
        }
    }).catch(err => {
        res.status(500).send({ message: `Erro ao recuperar Cadastros com o id#${id}` });
    });
};


exports.update = (req, res) => {
    const id = req.params.id;

    let validate = validatePayload(req.body)
    if (validate !== true) {
        res.status(400).send({ message: validate });
        return;
    }

    let cadastro = payloadToJSON(req.body)

    Cadastros.update(cadastro, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({ message: `O cadastro com id#${id} foi atualizado com sucesso.` });
        } else {
            res.send({ message: `Não foi possível atualizar o cadastro com o id#${id}. Talvez o cadastro não tenha sido encontrado ou JSON não foi enviado! num => ${num}` });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Erro ao atualizar cadastros com o id#${id}`
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Cadastros.destroy({
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({ message: "O cadastro foi excluído com sucesso!" });
        } else {
            res.send({ message: `Não foi possível excluir o cadastro com o id#${id}. Talvez o cadastro não tenha sido encontrado!` });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Não foi possível excluir o cadastro com o id#${id}`
        });
    });
};

function validatePayload(payload) {
    const camposObrigatorios = [
        "id_usuario",
        "data_hora_cadastro",
        "codigo",
        "nome",
        "cpf_cnpj",
        "cep",
        "logradouro",
        "endereco",
        "numero",
        "bairro",
        "cidade",
        "uf",
        "complemento",
        "fone",
        "limite_credito",
        "validade"
    ];

    for (const campo of camposObrigatorios) {
        if (!(campo in payload)) {
            return `${campo} é obrigatório e não foi fornecido.`;
        }
    }

    return true;
}

function payloadToJSON(payload) {
    return cadastro = {
        id_usuario: payload.id_usuario,
        data_hora_cadastro: payload.data_hora_cadastro,
        codigo: payload.codigo,
        nome: payload.nome,
        cpf_cnpj: payload.cpf_cnpj,
        cep: payload.cep,
        logradouro: payload.logradouro,
        endereco: payload.endereco,
        numero: payload.numero,
        bairro: payload.bairro,
        cidade: payload.cidade,
        uf: payload.uf,
        complemento: payload.complemento,
        fone: payload.fone,
        limite_credito: payload.limite_credito,
        validade: payload.validade
    };
}