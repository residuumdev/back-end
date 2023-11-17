const db = require("./models/index");
const bcrypt = require('bcryptjs');
const usuario = require("./models/usuario");

exports.verificaUsuario = async(dados)=>{
  const user = await db.usuario.findOne({
    attributes:['usuario_nome','usuario_matricula','usuario_senha'],
    where:{
        usuario_nome: dados.usuario_nome,
        usuario_matricula : dados.usuario_matricula,
    }
  });
  
  if(user){
    return user;
  }else{
    return false;
  }
  
  
}
exports.listar = async() => {
  const data = await db.usuario.findAll({
    include: [
      {
        model: db.instituicao,
        attributes: ['id','instituicao_nome','instituicao_cnpj'],
      },
    ],
    attributes: ['id','usuario_nome'],
  });
  try{
    return data;
  }catch{
    return false;
  }
 
}

exports.verificaDados = async(id)=>{
  const user = await db.usuario.findOne({
    attributes:['id'],
    where:{
        id: id,
    }
  });
  
  if(user){
    return true;
  }else{
    return false;
  }
  
  
}





exports.deletarUsuario = async(id)=>{
    const user = await db.usuario.destroy(
      {
          where:{
              id: id
          }
      })
      try{
        if(user){
          return true;
        }else{
          return false;
        }
        
      }catch{
        return false;
      }
    }


exports.UpDate = async(dados)=>{
    const update = await db.usuario.findOne({
      where:{
          id: dados.id
      }
    });
    if(dados.usuario_nome){
      update.usuario_nome = dados.usuario_nome;
    }
    if(dados.usuario_matricula){
      update.usuario_matricula = dados.usuario_matricula;
    }
    if(dados.usuario_senha){
      dados.usuario_senha = await bcrypt.hash(dados.usuario_senha, 8);
      update.usuario_senha = dados.usuario_senha;
    }else{
      return false;
    }
    const Salvo = await update.save();
    try{
      return true;
    }catch{
      return false;
    }

  }