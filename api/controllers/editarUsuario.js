const tarefaModel = require('../../db/tarefaModels');

exports.editarUsuario = async(req, res)=>{
   // #swagger.tags = ['Usuario']
    // #swagger.description = 'rota de editar usuario'

    /*
        #swagger.parameters['usuario_editar' = {
            in: 'body',
            description: 'editar um usuario no banco',
            required: true,
            schema: {$ref: "#/definitions/editar_usuario"}
        }]
     */
  const dados = req.body;
  // id, usuario_nome, usuario_matricula, usuario senha
  const validar = await tarefaModel.verificaDados(dados.id);
  if(validar){
      const editar = await tarefaModel.UpDate(dados);

      if (editar){
        return res.status(200).json(
          data={
          message:'dados salvo com sucesso',
          code: 200
      })
      }else{
        return res.status(201).json(
          data={
          message:'nada pra salvar',
          code: 201
      })
      }
  }else{
    return res.status(201).json(
      data={
      message:'erro de dados',
      code: 201
  })
  }
  
}