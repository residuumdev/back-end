const express = require("express");
const router = express.Router();

const cadastrarResiduo = require("./controllers/cadastrarResiduo");
const listarResiduo = require("./controllers/listarResiduo");
const atualizarResisuo = require('./controllers/atualizarResiduo');
const deleteResisuo = require('./controllers/deletarResiduo');


router.post('/cadastrar/coleta_peso', cadastrarResiduo.cadastrarResiduo);
router.get('/listar/coleta_peso', listarResiduo.ListarResiduo);
router.put('/atualizar/coleta_peso', atualizarResisuo.AtualizarResiduo);
router.delete('/delete/coleta_peso', deleteResisuo.DeletarResiduo);

module.exports = router;
