const tarefaModel = require("../../db/tarefaModels");

exports.ListarResiduo = async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'buscar lista de residuos'
  
  try {
    const listar = await tarefaModel.listarResiduo();
    console.log(listar)
    return res.status(200).json(
      (data = {
        code:200,
        message: "Listagem realizada",
        residuos: listar
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
