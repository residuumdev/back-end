const tarefaModel = require("../../db/tarefaModels");

exports.AtualizarResiduo = async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'atualizar dados de residuo'

  /*
        #swagger.parameters['atualizar residuo' = {
            in: 'body',
            description: 'editar um usuario no banco',
            required: true,
            schema: {$ref: "#/definitions/atualizar_coleta_peso"}
        }]
     */
  const dados = req.body;
  
  const validar = await tarefaModel.verificaDados(dados.id);
  if (validar) {
    const editar = await tarefaModel.UpDate(dados);

    if (editar) {
      return res.status(200).json(
        (data = {
          editar,
          code: 200,
        })
      );
    } else {
      return res.status(201).json(
        (data = {
          message: "nada pra salvar",
          code: 201,
        })
      );
    }
  } else {
    return res.status(404).json(
      (data = {
        message: "dados nao encontrado",
        code: 404,
      })
    );
  }
};
