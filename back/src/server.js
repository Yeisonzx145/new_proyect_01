const express = require('express');
const router = require('./routes')
const cors = require("cors");

const PORT = 3001;

const server = express();
server.use(express.json());
server.use(cors());

server.use('/',router);

server.listen(PORT,()=>{
    console.log('Empeso el server');
});

module.exports = server;


// const http = require('http');
// const getCharById = require('./controllers/getCharById');
// const getCharDetail = require('./controllers/getCharDetail')

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     if(url.includes('onsearch')) {
//         const id = url.split('/').at(-1);
//         getCharById(res,id);
//     }
//     if(url.includes('detail')){
//         const id = url.split('/').at(-1);
//         getCharDetail(res,id);
//     }
// }).listen(3001,'localhost')