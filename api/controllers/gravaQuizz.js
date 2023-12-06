const db = require("../../db/models/index");

exports.GravaQuizz = async (req, res) => {
  // #swagger.tags = ['Participante']
  // #swagger.description = 'cadastrar o residuo'

  /*
        #swagger.parameters['gravar_Quizz' = {
            in: 'body',
            description: 'cadastrar um ou mais residuo no banco',
            required: true,
            schema: {$ref: "#/definitions/gravar_Quizz"}
        }]
     */
  try {
    const dados = req.body;
    const cadastrar = await db.quiz.create(dados);

    res.status(200).json(
      data={
        mensagem:'quizz gravado com sucesso!',
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
