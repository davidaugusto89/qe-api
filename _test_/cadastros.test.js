const request = require('supertest');
const app = require('../index.js'); // Importe o aplicativo Express da sua aplicação

describe('API CRUD Testes', () => {
    let createdId; // ID do registro criado, será usado nos testes
    // Teste para criar um registro
    it('Verificando se a API está rodando', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(`Welcome to QE-API CRUD application.`);
    });

    // Teste para criar um registro
    it('Deve criar um novo registro', async () => {
        const response = await request(app)
            .post('/api/cadastros')
            .send(
                {
                    "id_usuario": 123456,
                    "data_hora_cadastro": "2023-08-17T10:00:00",
                    "codigo": "ABC123",
                    "nome": "João da Silva",
                    "cpf_cnpj": "123.456.789-00",
                    "cep": 12345678,
                    "logradouro": "Rua das Flores",
                    "endereco": "Edifício Primavera",
                    "numero": "101",
                    "bairro": "Centro",
                    "cidade": "São Paulo",
                    "uf": "SP",
                    "complemento": "Apartamento 202",
                    "fone": "(11) 1234-5678",
                    "limite_credito": 1500.00,
                    "validade": "2024-12-31"
                }
            );

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        createdId = response.body.id; // Armazena o ID do registro criado para usá-lo em outros testes
    });

    // Teste para buscar o registro criado
    it('Deve buscar o registro criado', async () => {
        const response = await request(app).get(`/api/cadastros/${createdId}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(createdId);
    });

    // Teste para atualizar o registro criado
    it('Deve atualizar o registro criado', async () => {
        const response = await request(app)
            .put(`/api/cadastros/${createdId}`)
            .send(
                {
                    "id_usuario": 122222,
                    "data_hora_cadastro": "2023-08-17T10:00:00",
                    "codigo": "ABC123",
                    "nome": "João da Silva Junior",
                    "cpf_cnpj": "123.456.789-00",
                    "cep": 12345678,
                    "logradouro": "Rua das Flores",
                    "endereco": "Edifício Primavera",
                    "numero": "101",
                    "bairro": "Centro",
                    "cidade": "São Paulo",
                    "uf": "SP",
                    "complemento": "Apartamento 202",
                    "fone": "(11) 1234-5678",
                    "limite_credito": 1500.00,
                    "validade": "2024-12-31"
                }
            );

        expect(response.status).toBe(200);
        expect(response.body.message).toBe(`O cadastro com id#${createdId} foi atualizado com sucesso.`);
    });

    // Teste para excluir o registro criado
    it('Deve excluir o registro criado', async () => {
        const response = await request(app).delete(`/api/cadastros/${createdId}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('O cadastro foi excluído com sucesso!');
    });
});