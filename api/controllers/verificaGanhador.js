const db = require('../../db/models/index')

exports.VerificarGanhador = async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'verificacao de ganhador'
  
  try {
    const totalParticipante = await db.quiz.count();
    const palpite_coreto = await db.quiz.findAll({
        attributes:['nome','telefone','palpite'],
        where:{
            palpite: totalParticipante,
        }
      })
      if(palpite_coreto.length < 1){
        return res.status(201).json(
            (data = {
              code:201,
              message: "Ninguem acertou o palpite !!!",
              Total_de_participante: totalParticipante
            })
          );
      }
      
    return res.status(200).json(
      (data = {
        code:200,
        total_Participante: totalParticipante,
        message: "Parabens Ganhador(es) !!!",
        Ganhadores: palpite_coreto
      })
    );
  } catch {
    return res.status(404).json(
      (data = {
        code:404,
        message: "error",
      })
    );
  }
};
