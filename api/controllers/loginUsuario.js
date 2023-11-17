const tarefaModel = require('../../db/tarefaModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.loginUsuario = async (req, res)=>{
  // #swagger.tags = ['Usuario']
    // #swagger.description = 'rota de login usuario'

    /*
        #swagger.parameters['Usuario' = {
            in: 'body',
            description: 'o usuario vai logar',
            required: true,
            schema: {$ref: "#/definitions/loginUsuario"}
        }]
     */
  // usuario_nome, usuario_matricula, usuario_senha
  const dados = req.body;
    const verificado = await tarefaModel.verificaUsuario(dados);
  try{
    
    if(verificado){
      const validaSenha = await bcrypt.compare(dados.usuario_senha, verificado.usuario_senha);
              if(validaSenha){
                  let token = jwt.sign({id:verificado.id}, "KJHJGHJFGHGJKHLKLKJLKJKHJHK",{
                      expiresIn: '1h'
                  })
                 
                  return res.status(200).json(
                    data={
                      nome:verificado.usuario_nome,
                      message:"Usuario encontrado!",
                      code:200,
                      token
                  })
              }else{
                  return res.status(404).json(
                    data={
                      message:"verificar login",
                      code:404
                  })
              }
    }else{
      return res.status(404).json(
        data={
          message:"verificar dados de login",
          code:404
      })
    }

  }
  catch{
    return res.status(400).json(
      data={
        message:"erro de servidor"
    });
  }
};