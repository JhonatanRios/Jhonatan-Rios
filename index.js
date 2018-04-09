const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Calculadora de Jhonatan Rios'))

app.listen(5000, () => console.log('Example app listening on port 5000!'))

app.get('/suma', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a + b;
    res.send('Respuesta: '+c)
})

app.get('/resta', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a - b;
    res.send('Respuesta: '+c)
})

app.get('/multiplicacion', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a * b;
    res.send('Respuesta: '+c)
})

app.get('/divicion', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a / b;
    res.send('Respuesta: '+c)
})