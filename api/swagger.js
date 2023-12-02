const swaggerAutogen = require("swagger-autogen");

const endpointsFile = ["./routers.js"];
const outpuFile = "./swagger_output.json";

const doc = {
  info: {
    version: "3.0.3",
    title: "API residuum, sistema de gestao",
    description: "Documentacao automatica gerada pelo swagger autogen",
  },
  host: "localhost:8080",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json", "application/x-www-form-urlencoded"],
  produces: ["application/json", "application/x-www-form-urlencoded"],
  definitions: {
    cadastrar_residuo: {
      $peso_em_kg:10.5,
      $valor:25.5,
      $tipo_residuo:"plastico"
    },
    atualizar_coleta_peso:{
      $id:1,
      $peso_em_kg: 10.0,
      $valor: 10.0,
      $tipo_residuo: 10.0
    },
    delete_residuo:{
      $id:10
    },
    Descarte_residuo:{
      $nome:"emerson",
      $telefone:"92922222222",
      $tipo_residuo:"plastico",
      $palpite:12
    },
  },
  
};

swaggerAutogen(outpuFile, endpointsFile, doc).then(() => {
  require("../app");
});
