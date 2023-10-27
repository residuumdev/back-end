const swaggerAutogen = require('swagger-autogen')

const endpointsFile = ['./routers.js']
const outpuFile = './swagger_output.json'

const doc = {
    info: {
        version:"3.0.3",
        title:"API residuum, sistema de gestao",
        description:"documentacao automatica gerada pelo swagger autogen"
    },
    host:"localhost:8080",
    basePath:"/",
    schemes:['http','https'],
    consumes:['application/json', 'application/x-www-form-urlencoded'],
    produces:['application/json', 'application/x-www-form-urlencoded'],
    definitions: {
      request_empresa:{
          $objeto_login:{
            $razao_social: "razão social",
            $numero_cnpj: "21255002000100",
            $inscricao_estadual: "123456789"
          }
          
    }
    }
    
}

swaggerAutogen(outpuFile, endpointsFile, doc).then(()=>{
   require("../app")
})