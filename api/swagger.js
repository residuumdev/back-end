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
      $tipo_residuo:"plastico"
    },
    atualizar_coleta_peso:{
      $id:1,
      $peso_em_kg: 10.0,

      $tipo_residuo: "plastico",
      $valor: 10.0,
      $tipo_residuo: 10.0,
    },    
    dashboard:{
      $inicio:"2023-12-03",
      $fim:"2023-12-06",
      $data:"True",
    },
    delete_residuo:{
      $id:10
    },
    Descarte_residuo:{
      $telefone:"92922222222",
      $papel:1,
      $metal:1,
      $plastico:1,
      $vidro:1,
      $organico:1,
      $nao_reciclavel:1
    },
    gravar_Quizz:{
      $nome:"emerson",
      $telefone:"92993727982",
      $palpite:356
    },
  },
  
};

swaggerAutogen(outpuFile, endpointsFile, doc).then(() => {
  require("../app");
});
