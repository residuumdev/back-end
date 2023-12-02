const db = require('../../db/models/index');
const tarefaModel = require("../../db/tarefaModels");

exports.DeletarResiduo = async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'rota de deletar residuo'

  /*
        #swagger.parameters['delete residuo' = {
            in: 'body',
            description: 'deletar um residuo no banco',
            required: true,
            schema: {$ref: "#/definitions/delete_residuo"}
        }]
     */
  try{
    const id = req.body.id;
    const user = await db.coleta_peso.destroy({
      where: {
        id: id,
      },
    });
    if (!user){
      return res.status(404).json(
        (data = {
          message: "dados nao encontrado!",
          code: 404,
        })
      );
    }
    return res.status(500).json(
      (data = {
        message: "dados excluido com sucesso",
        code: 500,
      })
    );
  }catch{
    return res.status(404).json(
      (data = {
        message: "erro, verifique servidor!",
        code: 404,
      })
    );

  }
};
