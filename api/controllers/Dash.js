exports.Board = async (req, res) => {
    const dados = req.body;
    // #swagger.tags = ['Dashboard']
      // #swagger.description = 'buscar dados de coleta'

    const totalPlastico = await db.residuo.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Plastico"
        }
    });
    const totalVidro = await db.residuo.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Vidro"
        }
    });
    const totalMetal = await db.residuo.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Metal"
        }
    });
    const totalPapel = await db.residuo.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Papel"
        }
    });
    const totalOrganico = await db.residuo.sum('peso_em_kg', {
        where: {
            tipo_reisduo:"Organico"
        }
    });
        
        
    const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;
        
    data={
    total:total,
    total_papel_kg:totalPapel,
    total_metal_kg:totalMetal,
    total_vidro_kg:totalVidro,
    total_organico_kg:totalOrganico,
    total_plastico_kg:totalPlastico
    }
    
    if(dados){
        const porcentagemPapel = (totalPapel / total) * 100;
        const porcentagemMetal = (totalMetal / total) * 100;
        const porcentagemVidro = (totalVidro / total) * 100;
        const porcentagemOrganico = (totalOrganico / total) * 100;
        const porcentagemPlastico = (totalPlastico / total) * 100;
        
        data = {
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
        };
    // transforma para porcentagem
    }
    
         
    


};