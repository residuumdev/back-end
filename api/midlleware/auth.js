const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = {
    eAdmin : async function (req, res, next){
        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.json({message:'acesso negado'});
        }

        const [,token] = authHeader.split(' ');
        console.log(token);

        if(!token){
            return res.json({message:'acesso negado'});
        }

        try{
            const decode = await promisify(jwt.verify)(token, "KJHJGHJFGHGJKHLKLKJLKJKHJHK");
            req.userId = decode.id;
            return next();
        }catch(err){
            return res.json({message:'erro token ivalido'});
        }
    }
}