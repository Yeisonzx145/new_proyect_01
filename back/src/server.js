const express = require('express');
const server = express();
const router = require('./routes/router')
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.use('/', router);

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