const express = require('express');
const router = express.Router();

const listar = require('./controllers/listar');
const criar_usuario = require('./controllers/criar_usuario');
const loginUsuario = require('./controllers/loginUsuario');
const editarUsuario = require('./controllers/editarUsuario');
const deleteUsuario = require('./controllers/deletarUsuario')
const {eAdmin} = require('./midlleware/auth');

router.post('/login/usuario', loginUsuario.loginUsuario);
router.post('/criar/usuario', criar_usuario.criarUsuario);
router.get('/listar/usuario', listar.listar);
router.put('/editar/usuario', editarUsuario.editarUsuario);
router.delete('/delete/usuario', deleteUsuario.deleteUsuario)


module.exports = router;