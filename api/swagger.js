const swaggerAutogen = require('swagger-autogen')

const endpointsFile = ['./routers.js']
const outpuFile = './swagger_output.json'

const doc = {
    info: {
        version:"3.0.3",
        title:"API residuum, sistema de gestao",
        description:"Documentacao automatica gerada pelo swagger autogen"
    },
    host:"localhost:8080",
    basePath:"/",
    schemes:['http','https'],
    consumes:['application/json', 'application/x-www-form-urlencoded'],
    produces:['application/json', 'application/x-www-form-urlencoded'],
    definitions: {
      get_cliente:{

      },
      loginUsuario:{
              $usuario_email: "emers72",
              $usuario_senha: "12345",
      },
      cadastro_usuario:{
            $usuario_nome: "String",
            $usuario_senha:"String",
            $usuario_email:"String",
            $usuario_categoria:"integer",
            $usuario_empresa:"string",
            $empresa_nome:"string",
      }
    },
    
    
}

swaggerAutogen(outpuFile, endpointsFile, doc).then(()=>{
   require("../app")
})