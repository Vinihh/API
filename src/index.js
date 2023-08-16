//npm init -y
//npm i express cors dotenv
//Package.json > script > "start": "nodemon ./src/index.js"
//criar .env
//npm i nodemon

//get=consulta - post=inserção - delete=remoção - put=alteração

//parametros de corpo são usados geralmente com post,put ou delete

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import endpoints from './endpoints.js'

const server = express();
//serve como servidor da nossa aplicação;
//express é na verdade uma função;

server.use(cors());
//Habitamos o Cors na nossa aplicação, que são chamadas de outros dominios;

server.use(express.json());
// Habilitando a API para que ela entenda paramentros de corpo no formato json;

server.use(endpoints)

server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));
//chamar o servidor;
//O Server.listem tem dois paramentros:
//1º:  A porta de onde ela vai subir = preocess.env.PORT
//2º: Uma função de callback onde falamos que se subir vai chamar essa função
// Pra testar damos um NPM START




