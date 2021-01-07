create database omini;

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome varchar(20) NOT NULL,
    cpf varchar(15) NOT NULL
);

INSERT INTO usuario(nome, cpf)
VALUES ('Daniel', '04874456600');
