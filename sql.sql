CREATE DATABASE jape;
CREATE TABLE travelers(
    id SERIAL PRIMARY KEY,
    name VARCHAR (255),
    bags VARCHAR(255),
    origin VARCHAR (255),
    destination VARCHAR (255),
    pic BYTEA -- we will use this for the travelers to up load a pic of themselves

);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR (255),
    bags VARCHAR (255),
    origin VARCHAR (255),
    destination VARCHAR(255),
    pic BYTEA
);





