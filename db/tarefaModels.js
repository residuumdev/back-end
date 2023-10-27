const db = require("./models/index");
const bcrypt = require('bcryptjs');

exports.pegatodos = async() => {
    const condominios = await db.dados_condominios.findAll();
    const empresas = await db.dados_empresas.findAll();
    const residencias = await db.dados_residencias.findAll();
    const users = await db.user.findAll({attributes:['categoria','matricula','nome']});

    const dadosRes = {
      data:{
        code:200,
        condominios,
        empresas,
        residencias,
        users
      }
    }
  return dadosRes;
}

exports.validarUsuario = async(dados)=>{
  const user = await db.user.findOne({
    attributes:['nome','matricula','senha'],
    where:{
        matricula : dados.matricula
    }
  });
  if(user){
    return user;
  }else{
    return false;
  }
  
}

exports.verificarCliente = async(dados)=>{
  if (dados.categoria == 'empresa'){
    const user = await db.dados_empresas.findOne({
      attributes:['cnpj'],
      where:{
          cnpj : dados.cnpj
      }
    });
    if (user){
        return true;
      }else{
        return false;
      }
  }else if (dados.categoria == 'condominio'){
    const user = await db.dados_condominios.findOne({
      attributes:['cnpj'],
      where:{
          cnpj : dados.cnpj
      }
    });
    if (user){
        return true;
      }else{
        return false;
      }
  }else if (dados.categoria == 'residencia'){
    const user = await db.dados_residencias.findOne({
      attributes:['cpf'],
      where:{
          cpf : dados.cpf
      }
    });
    if (user){
        return true;
      }else{
        return false;
      }
  }else if (dados.categoria == 'userSystem'){
    const user = await db.user.findOne({
      attributes:['matricula'],
      where:{
          matricula : dados.matricula
      }
    });
    if (user){
        return true;
      }else{
        return false;
      }
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

  }else if(dados.categoria == 'userSystem'){
    dados.senha = await bcrypt.hash(dados.senha, 8);
    const criar = await db.user.create(dados);
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