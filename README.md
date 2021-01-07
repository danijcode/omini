# Projeto Omini API
Projeto de avaliação utilizando as tecnologias NodeJs + Typescript.

- Segue descritos os passos para configurar e subir o projeto.

## Server
- Instale o [nodeJS](https://nodejs.org), banco de dados: [PostgreSQL](https : //www.postgresql.org/download/) e o [Yarn](https://yarnpkg.com/).
- Vá para a pasta raiz do projeto e execute `yarn install` para instalar as dependencias e crie o banco utilizando o arquivo `createDatabase.sql` que encontra-se dentro do diretorio `sql`.
- Defina sua conexão de banco de dados em `database/Config.ts`. 
- Serviços expostos para serem consumidos via API:
### POST - Cadastro de Usuario
http://localhost:3000/users
```
{
    "nome": "Daniel",
    "cpf": "04878411577"
}
```
### PUT - Editar Usuario
http://localhost:3000/users/1
```
{
    "nome": "Testa",
    "cpf": "96331172084"
}
```
### GET - Recupera um usuario especifico
http://localhost:3000/users/1

### GET - Recupera todos os usuarios
http://localhost:3000/users

### DELETE - deleta um usuario especifico
http://localhost:3000/users/1


## Rodando Aplicação (Desenvolvimento)
- Execute `yarn dev` dentro da pasta raiz para subir o projeto.

## Rodando Testes unitarios (Desenvolvimento)
- Execute `yarn test` dentro da pasta raiz para rodar os testes unitarios de acerto e erro dos validadores.

## Buildando o projeto
- Embora não mandatorio, executando `yarn build` é gerado o build do projeto para uma possivel publicação.

## Logs (Desenvolvimento)
- Implementei uma estrutura basica nos repositorios para capturar possiveis erros de banco de dados e salvam em um arquivo json (logs.json) e também adicionei uma middleware que escuta as requisições que passam pela API.

## OBS
- O projeto em si é bastante simples e possui alguns bugs do qual não consegui resolver no tempo habil de entregar no prazo, porém até onde rodei esta funcional dentro da proposta do enunciado, agredecido pela oportunidade! 