const db = require('../../db/models/index');
const { Op } = require("sequelize");


exports.Board = async (req, res) => {
    const dados = req.body;
    // #swagger.tags = ['Dashboard']
    // #swagger.description = 'buscar dados de coleta'
    /*
        #swagger.parameters['dashboard' = {
            in: 'body',
            description: 'cadastrar um ou mais residuo no banco',
            required: true,
            schema: {$ref: "#/definitions/dashboard"}
        }]
     */

        const TotalPessoas = await db.descarte.count({
            distinct: true, // Conta apenas valores distintos
            col: 'telefone', // Coluna a considerar para contar valores distintos
            where: {
              createdAt: {
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
              }
            }
          });


    const totalPlastico = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"Plastico",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });

    const totalVidro = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"Vidro",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalMetal = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"Metal",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalPapel = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"Papel",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalOrganico = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"Organico",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
        
        
    const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;
    console.log(total) 
    data={
    quantPessoas:TotalPessoas,
    total:total,
    total_papel_kg:totalPapel,
    total_metal_kg:totalMetal,
    total_vidro_kg:totalVidro,
    total_organico_kg:totalOrganico,
    total_plastico_kg:totalPlastico
    }
    console.log(data) 
    const porcentagemPapel = (totalPapel / total) * 100;
    const porcentagemMetal = (totalMetal / total) * 100;
    const porcentagemVidro = (totalVidro / total) * 100;
    const porcentagemOrganico = (totalOrganico / total) * 100;
    const porcentagemPlastico = (totalPlastico / total) * 100;
    
    data_porcentagem = {

        porcentagem_papel: porcentagemPapel,
        porcentagem_metal: porcentagemMetal,
        porcentagem_vidro: porcentagemVidro,
        porcentagem_organico: porcentagemOrganico,
        porcentagem_plastico: porcentagemPlastico
    }
    console.log(data_porcentagem) 
    if(!total){
        return res.status(201).json({mensagem:"nada foi coletado nesse dia"})
    }else{
        if(dados.data=="True"){

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