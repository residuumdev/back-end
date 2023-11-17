const tarefaModel = require('../../db/tarefaModels');

exports.deleteUsuario = async(req, res)=>{
   // #swagger.tags = ['Usuario']
    // #swagger.description = 'rota de deletar usuario'

    /*
        #swagger.parameters['usuario_deletar' = {
            in: 'body',
            description: 'deletar um usuario no banco',
            required: true,
            schema: {$ref: "#/definitions/delete_usuario"}
        }]
     */
    const id = req.body.id;
  
    const deletar = await tarefaModel.deletarUsuario(id);
  
    if(deletar){
      return res.status(200).json(
        data={
        message:'cliente excluido com sucesso',
        code: 200
    })
    }else{
      return res.status(404).json(
        data={
        message:'cliente nao encontrado!',
        code: 404
    })
    }
  }