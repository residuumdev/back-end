const tarefaModel = require('../../db/tarefaModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.getAll = async (req, res) => {
  // #swagger.tags = ['Clientes']
    // #swagger.description = 'cria cliente'

    /*
        #swagger.parameters['novo cliente' = {
            in: 'body',
            description: 'informacoes',
            required: true,
            schema: {$ref: "#/definitions/request_empresa"}
        }]
     */
    /*
        #swagger.responses[201]={
            in: 'body',
            descrition: 'cliente resgistardo com sucesso',
            schema: { $ref: "#/definitions/request_empresa"}
        }
     */
  const tarefa = await tarefaModel.pegatodos();
  return res.json(tarefa);
};

exports.ListarClientes = async(req, res)=>{
  const dados = req.body;
  if (dados.categoria == 'empresa'){
    const tarefaListar = await tarefaModel.pegatodos(dados);
    if(tarefaListar){
      return res.status(200).json(tarefaListar.data.empresas);
    }else{
      return res.status(201).json(
        {
          data:{
            message:'tabela Vazia',
            code: 201
          }
        }
      );
    }
  }else if (dados.categoria == 'condominio'){
    const tarefaListar = await tarefaModel.pegatodos(dados);
    if(tarefaListar){
      return res.status(200).json(tarefaListar.data.condominios);
    }else{
      return res.status(201).json(
        {
          data:{
            message:'tabela Vazia',
            code: 201
          }
        }
      );
    }
  }else if (dados.categoria == 'residencia'){
    const tarefaListar = await tarefaModel.pegatodos(dados);
    if(tarefaListar){
      return res.status(200).json(tarefaListar.data.residencias);
    }else{
      return res.status(201).json(
        {
          data:{
            message:'tabela Vazia',
            code: 201
          }
        }
      );
    }
  }if (dados.categoria == 'userSystem'){
    const tarefaListar = await tarefaModel.pegatodos(dados);
    if(tarefaListar){
      return res.status(200).json(tarefaListar.data.users);
    }else{
      return res.status(201).json(
        {
          data:{
            message:'tabela Vazia',
            code: 201
          }
        }
      );
    }
  }
};
exports.listarEmpresas = async(req, res)=>{
  const tarefaListar = await tarefaModel.pegatodos();

  return res.json(tarefaListar.data.empresas);
};
exports.listarResidencias = async(req, res)=>{
  const tarefaListar = await tarefaModel.pegatodos();

  return res.json(tarefaListar.data.residencias);
};

exports.loginUser = async(req, res)=>{
  const dados = req.body
  const validar = await tarefaModel.validarUsuario(dados);
  if(validar){
    const validaSenha = await bcrypt.compare(dados.senha, validar.senha);
            if(validaSenha){
                var token = jwt.sign({id:validar.id}, "KJHJGHJFGHGJKHLKLKJLKJKHJHK",{
                    expiresIn: '1h'
                })

                return res.status(200).json(
                  data={
                    matricula:validar.matricula,
                    nome:validar.nome,
                    message:"Usuario encontrado!",
                    code:200,
                    token
                })
            }else{
                return res.status(201).json(
                  data={
                    message:"error de usuario"
                })
            }
  }else{
    return res.status(401).json(
      data={
        message: 'verificar login'
      }
    );
  }
  
}

exports.Cadastro = async(req, res)=>{
  const dados = req.body;
   const verificar = await tarefaModel.verificarCliente(dados);

   if (!verificar){
      const cria = await tarefaModel.cadastrarNoBD(dados);
      console.log(cria)
        if(cria){
          return res.status(200).json(
            data={
                message:'Dados cadastrados com sucesso'

            }
            
          )
        }else{
          return res.status(201).json(
            data={
                message:'erro, usuario nao cadastrado'
            }
        )
        }
   }else{
    return res.status(201).json(
      data={
          message:'erro, verificar dados'
      }
  )
  }

}

exports.Deletar = async(req, res)=>{
  const dados = req.body;

  const deletar = await tarefaModel.Deletar(dados);

  if(deletar){
    return res.status(200).json(
      data={
      message:'cliente excluido com sucesso',
      code: 200
  })
  }else{
    return res.status(404).json(
      data={
      message:'cliente nao encontrado!',
      code: 404
  })
  }
}

exports.Editar = async(req, res)=>{
  const dados = req.body;
  const validar = await tarefaModel.verificarCliente(dados);
  if(!validar){
      const editar = await tarefaModel.UpDate(dados);

      if (editar){
        return res.status(200).json(
          data={
          message:'dados salvo com sucesso',
          code: 200
      })
      }else{
        return res.status(201).json(
          data={
          message:'erro ao salvar',
          code: 201
      })
      }
  }else{
    return res.status(201).json(
      data={
      message:'erro de dados',
      code: 201
  })
  }
  
}