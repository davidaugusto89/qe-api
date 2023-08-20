# Backend

Backend em formato RESTful com operações `CRUD` para um cadastro, utilizando `Node.js` + `Express` + `MySQL`.

## Requisitos Básicos

> Node.js >= 19.x

> MySQL

> Git

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## Guia de Instalação

Para instalar a aplicação, execute os seguintes comandos no terminal:

```sh
git clone -b main https://github.com/davidaugusto89/qe-api.git
cd qe-api
npm install
```

Alterar arquivo `.env` com as credenciais de conexão para o banco de dados MySQL que será utilizado.

```sh
DB_HOST={DB_HOST}
DB_DATABASE={DB_NOME}
DB_USERNAME={DB_USUARIO}
DB_PASSWORD={DB_SENHA}
```

## Iniciar o projeto

Para inciar o servidor após instalar, acessar pelo terminal o diretório que foi instalado o projeto e execute o comando:

```sh
npm run start
```

## Lista de Endpoints

`[POST]` - `http://localhost:3001/cadastros/` => novo cadastro

`[GET]` - `http://localhost:3001/cadastros/` => lista todos os cadastros do sistema

`[GET]` - `http://localhost:3001/cadastros/{id}` => bsuca cadastro específico pelo {id}

`[PUT]` - `http://localhost:3001/cadastros/{id}` => atualizar cadastro específico pelo {id}

`[DELETE]` - `http://localhost:3001/cadastros/{id}` => remover cadastro específico pelo {id}

Os cadastros podem ser filtrados utilizando os parâmetros via GET: `codigo`, `nome`, `cep` e `cidade`.
Exemplos:

`http://localhost:3001/cadastros/?codigo=1234`

`http://localhost:3001/cadastros/?nome=João`

`http://localhost:3001/cadastros/?cep=12345-678`

`http://localhost:3001/cadastros/?cidade=São Paulo`

## Testes Unitários

Você pode executar os testes unitários usando o seguinte comando:

```sh
npm run test
```

Print de exemplo após execução dos testes unitários:

![JEST](https://github.com/davidaugusto89/qe-api/blob/main/_test_/jest.png)

## Testes no Insomnia e Postman

Para testar os endpoints, existe dentro do repositório o arquivo Insomnia.json para ser importado no Insomnia ou o arquivo Postman.json para ser importado no Postman, ambos contêm as requisições prontas para teste.