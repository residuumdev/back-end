const express = require('express');
const router = express.Router();

const listar = require('./controllers/listar');
const criar_usuario = require('./controllers/criar_usuario');
const loginUsuario = require('./controllers/loginUsuario')
const {eAdmin} = require('./midlleware/auth');


router.get('/listar', listar.listar);
router.post('/criar/usuario', criar_usuario.criarUsuario);
router.post('/login/usuario', loginUsuario.loginUsuario)


module.exports = router;