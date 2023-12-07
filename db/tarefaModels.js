const db = require("./models/index");

exports.listarResiduo = async () => {
  try {
    const listar = await db.coleta_peso.findAll();
    return listar;
  } catch {
    return false;
  }
};

exports.verificaDados = async (id) => {
  try{
    const user = await db.coleta_peso.findOne({
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

exports.UpDate = async (dados) => {
  
  try {
    const menssagem="";
    const update = await db.coleta_peso.findOne({
      where: {
        id: dados.id,
      },
    });
    if (dados.peso_em_kg) {
      update.peso_em_kg = dados.peso_em_kg;
    }
    if (dados.tipo_residuo) {
      update.tipo_residuo = dados.tipo_residuo;
    }else{
      return {menssagem: "nada pra salvar"}
    }
    const Salvo = await update.save();
    return {menssagem: "salvo com sucesso!"}
  } catch {
    return false;
  }
};
