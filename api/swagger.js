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
    loginUsuario: {
      $usuario_nome: "emerson",
      $usuario_matricula: "1234",
      $usuario_senha: "1234",
    },
    cria_usuario: {
      $usuario_nome: "emerson",
      $usuario_matricula: "1234",
      $usuario_senha: "1234",
    },
    editar_usuario: {
      $id: "1",
      $usuario_nome: "emerson",
      $usuario_matricula: "1234",
      $usuario_senha: "1234",
    },
  },
};

swaggerAutogen(outpuFile, endpointsFile, doc).then(() => {
  require("../app");
});
