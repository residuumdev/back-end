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
      $papel: 10.5,
      $metal: 10.5,
      $vidro: 10.5,
      $organico:10.5,
      $plastico:10.5
    },
    atualizarResisuo:{
      $id:1,
      $papel: 10.0,
      $metal: 10.0,
      $vidro: 10.0,
      $organico:10.0,
      $plastico:10.0
    }
  },
};

swaggerAutogen(outpuFile, endpointsFile, doc).then(() => {
  require("../app");
});
