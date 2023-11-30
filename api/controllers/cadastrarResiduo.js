const db = require("../../db/models/index");

exports.cadastrarResiduo = async (req, res) => {
  // #swagger.tags = ['Usuario']
  // #swagger.description = 'cadastrar o residuo'

  /*
        #swagger.parameters['cadastrar_residuo' = {
            in: 'body',
            description: 'cadastrar um ou mais residuo no banco',
            required: true,
            schema: {$ref: "#/definitions/cadastrar_residuo"}
        }]
     */
  try {
    const dados = req.body;
    const cadastrar = await db.residuo.create(dados);

    res.status(200).json(
      data={
        mensagem:'Resíduo Cadastrado com sucesso!',
        code:200
      }
    );
  } catch (error) {
    res.status(500).json(data={
      mensagem:'erro no cadastro',
      code:500
    });
  }
};
