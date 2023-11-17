const db = require('../../db/models/index');
const bcrypt = require('bcryptjs');


exports.criarUsuario = async(req, res) => {
  // #swagger.tags = ['Usuario']
    // #swagger.description = 'rota de criar usuario'

    /*
        #swagger.parameters['usuario_criar' = {
            in: 'body',
            description: 'Criar um usuario no banco',
            required: true,
            schema: {$ref: "#/definitions/cria_usuario"}
        }]
     */
    try {
      const dados = req.body;
      dados.usuario_senha = await bcrypt.hash(dados.usuario_senha, 8);
      const criar = await db.usuario.create({
        usuario_nome: dados.usuario_nome,
        usuario_matricula: dados.usuario_matricula,
        usuario_senha: dados.usuario_senha,
      })
      await db.instituicao.create({
        id: criar.id,
        instituicao_nome: dados.instituicao_nome,
        instituicao_cnpj: dados.instituicao_cnpj
      })
      
  
      res.status(201).json({message:'criado'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };