const db = require("./models/index");

exports.verificaUsuario = async (dados) => {
  const user = await db.usuario.findOne({
    attributes: ["usuario_nome", "usuario_matricula", "usuario_senha"],
    where: {
      usuario_nome: dados.usuario_nome,
      usuario_matricula: dados.usuario_matricula,
    },
  });

  if (user) {
    return user;
  } else {
    return false;
  }
};
exports.listarResiduo = async () => {
  try {
    const listar = await db.residuo.findAll();
    return listar;
  } catch {
    return false;
  }
};

exports.verificaDados = async (id) => {
  try{
    const user = await db.residuo.findOne({
      attributes: ["id"],
      where: {
        id: id,
      },
    });
    return user;
  }catch{
    return false;
  }
};

exports.deletarUsuario = async (id) => {
  const user = await db.usuario.destroy({
    where: {
      id: id,
    },
  });
  try {
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

exports.UpDate = async (dados) => {
  
  try {
    const update = await db.residuo.findOne({
      where: {
        id: dados.id,
      },
    });
    if (dados.papel) {
      update.papel = dados.papel;
    }
    if (dados.metal) {
      update.metal = dados.metal;
    }
    if (dados.vidro) {
      update.vidro = dados.vidro;
    }
    if (dados.organico) {
      update.organico = dados.organico;
    }
    if (dados.plastico) {
      update.plastico = dados.plastico;
    }
    const Salvo = await update.save();
    return true;
  } catch {
    return false;
  }
};
