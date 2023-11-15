const tarefaModel = require('../../db/tarefaModels');

exports.listar = async (req, res) => {
    // #swagger.tags = ['Listar']
      // #swagger.description = 'buscar cliente'
  
      /*
          #swagger.parameters['get_cliente' = {
              in: 'body',
              description: 'information',
              required: true,
              schema: {$ref: "#/definitions/get_cliente"}
          }]
       */
          const listar = await tarefaModel.listar();
  
          return res.status(201).json(data={
            status:'sucesso',
            message:"Listagem realizada",
            data:listar
        });
        
          };