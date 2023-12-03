exports.Board = async (req, res) => {
    const dados = req.body;
    // #swagger.tags = ['Dashboard']
    // #swagger.description = 'buscar dados de coleta'

    const TotalPessoas = await db.descarte.count({
    distinct: true,
    col: 'nome',
    where: {
          createdAt: {
            [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
          }
        }
    });
      


    const totalPlastico = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Plastico",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalVidro = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Vidro",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalMetal = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Metal",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalPapel = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Papel",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalOrganico = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Organico",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
        
        
    const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;
        
    data={
    quantPessoas:TotalPessoas,
    total:total,
    total_papel_kg:totalPapel,
    total_metal_kg:totalMetal,
    total_vidro_kg:totalVidro,
    total_organico_kg:totalOrganico,
    total_plastico_kg:totalPlastico
    }
    const porcentagemPapel = (totalPapel / total) * 100;
    const porcentagemMetal = (totalMetal / total) * 100;
    const porcentagemVidro = (totalVidro / total) * 100;
    const porcentagemOrganico = (totalOrganico / total) * 100;
    const porcentagemPlastico = (totalPlastico / total) * 100;
    
    data_porcentagem = {
        total_papel_kg: totalPapel,
        total_metal_kg: totalMetal,
        total_vidro_kg: totalVidro,
        total_organico_kg: totalOrganico,
        total_plastico_kg: totalPlastico,
        porcentagem_papel: porcentagemPapel,
        porcentagem_metal: porcentagemMetal,
        porcentagem_vidro: porcentagemVidro,
        porcentagem_organico: porcentagemOrganico,
        porcentagem_plastico: porcentagemPlastico
    }
    if(!total){
        return res.status(401),print("ERRO_Não_houve_coleta ")
    }else{
        if(dados.data=true){

     return res.status(200).json(
            data
        )
    }else{
        return res.status(200).json(
            data_porcentagem
            )
    }
}

 


         
    


};