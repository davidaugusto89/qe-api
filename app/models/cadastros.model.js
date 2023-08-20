module.exports = (sequelize, Sequelize) => {
  const Cadastros = sequelize.define("cadastros", {
    id_usuario: {
      type: Sequelize.BIGINT
    },
    codigo: {
      type: Sequelize.STRING(15)
    },
    nome: {
      type: Sequelize.STRING(150)
    },
    cpf_cnpj: {
      type: Sequelize.STRING(20)
    },
    cep: {
      type: Sequelize.STRING(9)
    },
    logradouro: {
      type: Sequelize.STRING(100)
    },
    endereco: {
      type: Sequelize.STRING(120)
    },
    numero: {
      type: Sequelize.STRING(20)
    },
    bairro: {
      type: Sequelize.STRING(50)
    },
    cidade: {
      type: Sequelize.STRING(60)
    },
    uf: {
      type: Sequelize.STRING(2)
    },
    complemento: {
      type: Sequelize.STRING(150)
    },
    fone: {
      type: Sequelize.STRING(15)
    },
    limite_credito: {
      type: Sequelize.FLOAT
    },
    validade: {
      type: Sequelize.DATE
    }
  },
    {
      tableName: 'cadastros',
      createdAt: 'data_hora_cadastro',
      updatedAt: 'data_hora_atualizacao',
      deletedAt: 'data_hora_remocao',
      paranoid: true,
      timestamps: true,
    });

  return Cadastros;
};