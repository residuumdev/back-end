const tarefaModel = require("../../db/tarefaModels");

exports.AtualizarResiduo = async (req, res) => {
  // #swagger.tags = ['Usuario']
  // #swagger.description = 'atualizar dados de residuo'

  /*
        #swagger.parameters['atualizar residuo' = {
            in: 'body',
            description: 'editar um usuario no banco',
            required: true,
            schema: {$ref: "#/definitions/atualizarResisuo"}
        }]
     */
  const dados = req.body;
  // id, usuario_nome, usuario_matricula, usuario senha
  const validar = await tarefaModel.verificaDados(dados.id);
  if (validar) {
    const editar = await tarefaModel.UpDate(dados);

    if (editar) {
      return res.status(200).json(
        (data = {
          message: "dados salvo com sucesso",
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
    return res.status(201).json(
      (data = {
        message: "erro de dados",
        code: 201,
      })
    );
  }
};
