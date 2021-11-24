const express =require('express');
const app = express();
const path = require('path');
app.use(express.static('public')) // para buscar los archivos estaticos , en este caso seria las fotos express se encarga de las rutas
app.listen(3030, ()=>console.log('Server on'));


app.get('/', function(req, res){res.sendFile(path.resolve(__dirname, './views/index.html')); });
app.get('/babbage', function(req, res){res.sendFile(path.resolve(__dirname, './views/babbage.html')); });
app.get('/berners-lee', function(req, res){res.sendFile(path.resolve(__dirname, './views/berners-lee.html')); });
app.get('/clarke', function(req, res){res.sendFile(path.resolve(__dirname, './views/clarke.html')); });
app.get('/hamilton', function(req, res){res.sendFile(path.resolve(__dirname, './views/hamilton.html')); });
app.get('/hopper', function(req, res){res.sendFile(path.resolve(__dirname, './views/hopper.html')); });
app.get('/lovelace', function(req, res){res.sendFile(path.resolve(__dirname, './views/lovelace.html')); });
app.get('/turing', function(req, res){res.sendFile(path.resolve(__dirname, './views/turing.html')); });
app.get('*',(req,res)=>res.send("ERROR PAGINA NO EXISTE"))

