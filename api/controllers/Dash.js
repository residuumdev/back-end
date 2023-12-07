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
    const totaleletronico = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"eletronico",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
    const totalnaoreciclavel = await db.coleta_peso.sum('peso_em_kg', {
        where: {
            tipo_residuo:"nao_reciclavel",
            createdAt: { 
                [Op.between]: [new Date(dados.inicio), new Date(dados.fim)]
            }
        }
    });
        
        
    const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico+totaleletronico+totalnaoreciclavel;
    console.log(total) 
    data={
    TotalPessoas,
    total,
    totalPapel,
    totalMetal,
    totalVidro,
    totalOrganico,
    totalPlastico,
    totalnaoreciclavel,
    totaleletronico
    }
    console.log(data) 
    const porcentagem_eletronico = (totaleletronico / total) * 100;
    const porcentagem_naoreciclavel = (totalnaoreciclavel / total) * 100;
    const porcentagem_papel = (totalPapel / total) * 100;
    const porcentagem_metal = (totalMetal / total) * 100;
    const porcentagem_vidro = (totalVidro / total) * 100;
    const porcentagem_organico = (totalOrganico / total) * 100;
    const porcentagem_plastico = (totalPlastico / total) * 100;
    
    data_porcentagem = {
        porcentagem_eletronico,
        porcentagem_naoreciclavel,
        porcentagem_papel,
        porcentagem_metal,
        porcentagem_vidro,
        porcentagem_organico,
        porcentagem_plastico
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