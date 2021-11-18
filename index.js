const express = require('express');
const app = express();

app.use(express.json());

const paes = [
    {
        nome:'Pao Italiano',
        preco: 10
    }
];

app.get('/paes', function(req, res){
res.json(paes);
});

app.post('/paes', function(req, res){
const {nome,preco} = req.body

const novoPao ={nome,preco};

paes.push(novoPao);

res.json(novoPao);

});
app.listen(3000,() => console.log('O servidor ta on!!'));