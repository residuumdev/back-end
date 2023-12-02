const db = require("../../db/models/index");

exports.DescarteResiduo = async (req, res) => {
  // #swagger.tags = ['Participante']
  // #swagger.description = 'cadastrar o residuo'

  /*
        #swagger.parameters['Descarte_residuo' = {
            in: 'body',
            description: 'cadastrar um ou mais residuo no banco',
            required: true,
            schema: {$ref: "#/definitions/Descarte_residuo"}
        }]
     */
  try {
    const dados = req.body;
    const cadastrar = await db.descarte.create(dados);

    res.status(200).json(
      data={
        mensagem:'Obrigado '+dados.nome+' por ajuda o planeta',
        code:200
      }
    );
  } catch (error) {
    console.log(error)
    res.status(500).json(data={
      mensagem:'erro no cadastro',
      code:500
    });
  }
};
