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
exports.criarUsuario = async(dados)=>{
  dados.usuario_senha = await bcrypt.hash(dados.usuario_senha, 8);

    const criarEmpresa = await db.empresa.create({
      empresa_nome: dados.empresa_nome
    });
    
    const criarUsuario = await db.usuario.create({
        usuario_nome: dados.usuario_nome,
        usuario_senha: dados.usuario_senha,
        usuario_email: dados.usuario_email,
        usuario_categoria: dados.usuario_categoria,
        usuario_empresa: dados.usuario_empresa,
        empresa_id: criarEmpresa.id
    });
    

    try{
      return true;
    }catch{
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





exports.cadastrarNoBD = async(dados)=>{
  if (dados.categoria == 'empresa'){
    const criar = await db.dados_empresas.create(dados);
      return criar;

  }else if(dados.categoria == 'condominio'){
    const criar = await db.dados_condominios.create(dados);
    return criar;

       
  }else if(dados.categoria == 'residencia'){
    const criar = await db.dados_residencias.create(dados);
      return criar;
  }
} 

exports.Deletar = async(dados)=>{
  if (dados.categoria == 'empresa'){
    const user = await db.dados_empresas.destroy(
      {
          where:{
              id: dados.id
          }
      }
      );
      if(user){
        return true;
      }else{
        return false;
      }
  }else if (dados.categoria == 'condominio'){
    const user = await db.dados_condominios.destroy(
      {
          where:{
              id: dados.id
          }
      }
      );
      if(user){
        return true;
      }else{
        return false;
      }
  }else if (dados.categoria == 'residencia'){
    const user = await db.dados_residencias.destroy(
      {
          where:{
              id: dados.id
          }
      }
      );
      if(user){
        return true;
      }else{
        return false;
      }
  }else if (dados.categoria == 'usersystem'){
    const user = await db.user.destroy(
      {
          where:{
              id: dados.id
          }
      }
      );
      if(user){
        return true;
      }else{
        return false;
      }
  }
  
}

exports.UpDate = async(dados)=>{
  if (dados.categoria == 'empresa'){
    const update = await db.dados_empresas.findOne({
      where:{
          id: dados.id
      }
    });
    
    if(dados.nome_fantasia){
      update.nome_fantasia = dados.nome_fantasia;
    }
    if(dados.cnpj){
      update.cnpj = dados.cnpj;
    }
    if(dados.cep){
      update.cep = dados.cep;
    }
    if(dados.bairro){
      update.bairro = dados.bairro;
    }
    if(dados.rua){
      update.rua = dados.rua;
    }
    if(dados.numero){
      update.numero = dados.numero;
    }
    if(dados.email){
      update.email = dados.email;
    }
    if(dados.razao_social){
      update.razao_social = dados.razao_social;
    }
    if(dados.ceo){
      update.ceo = dados.ceo;
    }
    if(dados.telefone){
      update.telefone = dados.telefone;
    }
    const Salvo = await update.save();
    
    if (Salvo){
      return true;
    }else{
      return false;
    }

  }else if (dados.categoria == 'condominio'){
    const update = await db.dados_condominios.findOne({
      where:{
          id: dados.id
      }
    });
    
    if(dados.nome_condominio){
      update.nome_condominio = dados.nome_condominio;
    }
    if(dados.cnpj){
        update.cnpj = dados.cnpj;
    }
    if(dados.cep){
        update.cep = dados.cep;
    }
    if(dados.bairro){
        update.bairro = dados.bairro;
    }
    if(dados.rua){
        update.rua = dados.rua;
    }
    if(dados.numero){
        update.numero = dados.numero;
    }
    if(dados.email){
        update.email = dados.email;
    }
    if(dados.telefone){
        update.telefone = dados.telefone;
    }
    if(dados.sindico){
        update.sindico = dados.sindico;
    }
    const Salvo = await update.save();
    
    if (Salvo){
      return true;
    }else{
      return false;
    }
  }else if (dados.categoria == 'residencia'){
    const update = await db.dados_residencias.findOne({
      where:{
          id: dados.id
      }
    });
    
    if (dados.nome_titular) {
      update.nome_titular = dados.nome_titular;
    }
    if (dados.cpf) {
      update.cpf = dados.cpf;
    }
    if (dados.cep) {
      update.cep = dados.cep;
    }
    if (dados.bairro) {
      update.bairro = dados.bairro;
    }
    if (dados.rua) {
      update.rua = dados.rua;
    }
    if (dados.numero) {
      update.numero = dados.numero;
    }
    if (dados.email) {
      update.email = dados.email;
    }
    if (dados.telefone) {
      update.telefone = dados.telefone;
    }

    const Salvo = await update.save();
    
    if (Salvo){
      return true;
    }else{
      return false;
    }
  }else if (dados.categoria == 'userSystem'){
    const update = await db.user.findOne({
      where:{
          id: dados.id
      }
    });
    
    if (dados.nome) {
      update.nome = dados.nome;
    }
    if (dados.matricula) {
      update.matricula = dados.matricula;
    }
    if (dados.senha) {
      dados.senha = await bcrypt.hash(dados.senha, 8);
      update.senha = dados.senha;
    }
    
    const Salvo = await update.save();
    
    if (Salvo){
      return true;
    }else{
      return false;
    }
  }
  
}