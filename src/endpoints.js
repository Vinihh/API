import { Router } from "express";
import {dobro,somar} from './services.js'

const server = Router();
// A partir do Router criamos os endpoints, como um roteador

server.get('/ping', (req, resp) => {
    resp.send('pong')
    // O que passo pro send sera a resposta da API
    // Quem chamar a API receberá a msgm 'pong'
    // É chamado de Endpoint
})

server.get('/dobro/:numero', (req, resp) => {
    const numero = Number(req.params.numero);
    
    const d =dobro(numero)
    resp.send({
        dobro: d
    });
    //Endpoint do dobro

})

server.get('/somar',(req,resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = somar(a,b)
    resp.send({
        soma:x
    })

    // Na API: http://localhost:5000/somar?a=10&b=20;
    // O '?' demarca o inicio da passagem dos parametros de query string;
    // Para passar mais parametros, basta usar o '&';
})

server.post('/somar', (req,resp) => {
    const {a,b} = req.body;
    // São a msm coisa
    //let a = req.body.a;
    //let b = req.body.b;

    const x = somar(a,b)
    resp.send({
        soma:x
    })
    // Ao usar parametros de corpo não precisa fazer a conversão para Number, porque vai reconher da forma que você enviar na API;
    // O const é usado quando criamos uma variavel que não irá alterar o seu valor;
})

export default server;