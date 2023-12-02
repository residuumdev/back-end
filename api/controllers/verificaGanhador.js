const db = require('../../db/models/index')

exports.VerificarGanhador = async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'verificacao de ganhador'
  
  try {
    const conta_total_nome = await db.descarte.count();
    const palpite_coreto = await db.descarte.findAll({
        attributes:['nome','telefone','palpite'],
        where:{
            palpite: conta_total_nome,
        }
      })
      if(palpite_coreto.length < 1){
        return res.status(201).json(
            (data = {
              code:201,
              message: "Ninguem acertou o palpite !!!",
              Total_de_descarte: conta_total_nome
            })
          );
      }
      
    return res.status(200).json(
      (data = {
        code:200,
        Total_de_descarte: conta_total_nome,
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
