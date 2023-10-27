const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./api/swagger_output.json')

const router = require('./api/routers');


const cors = require('cors');

app.use(express.json()); //aceitar arquivo json

app.use(cors());

app.use(router); 


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.route('/').get((req, res)=>{
    res.status(200).send({servico:"api swagger doc"});
})

app.listen(8080, ()=>{
    console.log('Servidor funcionando corretamente na url: localhost:8080');
})


