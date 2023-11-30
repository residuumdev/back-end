const express = require("express");
const router = express.Router();

const cadastrarResiduo = require("./controllers/cadastrarResiduo");
const listarResiduo = require("./controllers/listarResiduo");
const atualizarResisuo = require('./controllers/atualizarResiduo');


router.post('/cadastrar/residuo', cadastrarResiduo.cadastrarResiduo);
router.get('/listar/residuo', listarResiduo.ListarResiduo);
router.put('/atualizar/residuo', atualizarResisuo.AtualizarResiduo);

module.exports = router;
