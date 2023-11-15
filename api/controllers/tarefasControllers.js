const tarefaModel = require('../../db/tarefaModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.loginUsuario = async (req, res)=>{
  // #swagger.tags = ['Login_Usuario']
    // #swagger.description = 'loginUsuario'

    /*
        #swagger.parameters['login usuario' = {
            in: 'body',
            description: 'o usuario vai logar',
            required: true,
            schema: {$ref: "#/definitions/loginUsuario"}
        }]
     */
    

  //  dados aguardados:{
  //   usuario_email:String,
  //   usuario_senha:String
  // }
  const dados = req.body;
    const verificado = await tarefaModel.verificaUsuario(dados);
  try{
    if(verificado){
      const validaSenha = await bcrypt.compare(dados.usuario_senha, verificado.usuario_senha);
              if(validaSenha){
                  let token = jwt.sign({id:verificado.id}, "KJHJGHJFGHGJKHLKLKJLKJKHJHK",{
                      expiresIn: '1h'
                  })
                 
                  return res.status(200).json(
                    data={
                      nome:verificado.usuario_nome,
                      message:"Usuario encontrado!",
                      code:200,
                      token
                  })
              }else{
                  return res.status(404).json(
                    data={
                      message:"verificar login",
                      code:404
                  })
              }
    }else{
      return res.status(404).json(
        data={
          message:"verificar dados de login",
          code:404
      })
    }

  }
  catch{
    return res.status(400).json(
      data={
        message:"erro de servidor"
    });
  }
};
exports.cadastrarUsuario = async(req, res)=>{
// #swagger.tags = ['Cadastro']
    // #swagger.description = 'cadastrar um usuario no sistema'

    /*
        #swagger.parameters['cadastrar usuario' = {
            in: 'body',
            description: 'Aqui o usuario vai ser cadastrado',
            required: true,
            schema: {$ref: "#/definitions/cadastro_usuario"}
        }]
     */

  //  dados aguardados:{
  //   usuario_nome: String,
  //   usuario_senha:String
  //   usuario_email:String,
  //   usuario_categoria:integer,
  //   usuario_empresa:string,
  //   empresa_nome:string
 
  // }
  const dados = req.body;
   const verificado = await tarefaModel.verificaUsuario(dados);
   
        if (!verificado){
          let criarUsuario = await tarefaModel.criarUsuario(dados);
          try{
            return res.status(200).json(
              data={
                  message:'Dados cadastrados com sucesso',
                  code:200
              })
            }catch{
              return res.status(500).send(
                {
                  data:{
                  message: 'Erro no cadastro',
                  code:500
                  }
                }
                );
            }
        }else{  
        return res.status(401).json(
          data={
              message:'verificar dados',
              code:401
          }
      )
      }

};


exports.listar = async (req, res) => {
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
        const listar = await tarefaModel.listar();

        return res.json(listar);
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