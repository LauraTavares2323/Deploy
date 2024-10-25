CREATE DATABASE nome_sobrenome_db;
USE nome_sobrenome_db;

CREATE TABLE nomes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL
);