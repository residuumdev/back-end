const express = require("express");
const router = express.Router();

const cadastrarResiduo = require("./controllers/cadastrarResiduo");
const listarResiduo = require("./controllers/listarResiduo");
const atualizarResisuo = require('./controllers/atualizarResiduo');
const deleteResisuo = require('./controllers/deletarResiduo');
const descarte = require('./controllers/descarteResiduo');
const verificarGanhador = require('./controllers/verificaGanhador');
const quiz = require('./controllers/gravaQuizz');

const Dashboard = require('./controllers/Dash');

router.post('/cadastrar/coleta_peso', cadastrarResiduo.cadastrarResiduo);
router.get('/listar/coleta_peso', listarResiduo.ListarResiduo);
router.put('/atualizar/coleta_peso', atualizarResisuo.AtualizarResiduo);
router.delete('/delete/coleta_peso', deleteResisuo.DeletarResiduo);
router.post('/descarte', descarte.DescarteResiduo);
router.get('/ganhadores', verificarGanhador.VerificarGanhador);
router.post('/gravaQuiz', quiz.GravaQuizz);

router.post('/Dashboard', Dashboard.Board);

module.exports = router;
