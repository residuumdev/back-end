const express = require('express');
const router = express.Router();
const tarefasController = require('./controllers/tarefasControllers');
const {eAdmin} = require('./midlleware/auth');

router.get('/total_clientes', eAdmin, tarefasController.getAll);
   
router.get('/listar', eAdmin , tarefasController.ListarClientes);

router.post('/login', tarefasController.loginUser);
router.post('/cadastrar', eAdmin , tarefasController.Cadastro);

router.delete('/Deletar', eAdmin , tarefasController.Deletar);

router.put('/editar', tarefasController.Editar);

module.exports = router;