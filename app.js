const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./api/swagger_output.json");

const router = require("./api/routers");

const cors = require("cors");
const whitelist = ["http://localhost:8080"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  credentials: true,
};

app.use(express.json()); //aceitar arquivo json
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.route("/").get((req, res) => {
  res.status(200).send({ servico: "api swagger doc" });
});

app.listen(8080, () => {
  console.log("Servidor funcionando corretamente na url: localhost:8080");
});
