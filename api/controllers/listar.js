const tarefaModel = require('../../db/tarefaModels');

exports.listar = async (req, res) => {
    // #swagger.tags = ['Usuario']
      // #swagger.description = 'buscar cliente'
          const listar = await tarefaModel.listar();
          try{
            return res.status(201).json(data={
              status:'sucesso',
              message:"Listagem realizada",
              data:listar
          });
          }catch{
            return res.status(404).json(data={
              message:"error"
          });
          }
  
          
        
          };