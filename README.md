# intrucao para utilizar o projeto
    apos baixar:
    $ npm i
    verifique se as configuracoes .env estao de acordo com o banco 
    $ npx sequelize-cli db:migrate
    para rodar o projeto
    $ nodemon app.js
    ou
    $ npm run play

    Verique documentacao Swagger na rota:
    http://localhost:8080/api-docs

INICIAR a CRIANCAO DO PROJETO
# npm init

instalar o sequelize
# npm i sequelize ou 
# npm install --save sequelize

instalação do drive para o banco de dados mysql
# npm install --save mysql2

sequelize CLI
# npm install --save-dev sequelize-cli

configuração cli
Para criar um projeto vazio, você precisará executar o comandoinit
# npx sequelize-cli init

CRIAR DATABASE NO WORKBANCH
### CREATE DATABASE residuum03 CHARACTER SET utf8mb4  COLLATE utf8mb4_unicode_ci;
se nao funcionar crie diretamente no ambiente do banco

TRABALHANDO COM VARIAVEIS DE AMBIENTE
# npm install dotenv --save

# CRIAR A MIGRATION participante
    npx sequelize-cli model:generate --name participante --attributes nomePar:string,nascimentoPar:string,celularPar:string,sexoPar:string,emailPar:string,escolaridadePar:string,matriculaPar:integer

# CRIAR A MIGRATION residuo
    npx sequelize-cli model:generate --name residuo --attributes matricula:integer,estado:string,cidade:string,bairro:string,papel:float,metal:float,vidro:float,organico:float,plastico:float

# CRIAR A MIGRATION endereco
    npx sequelize-cli model:generate --name endereco --attributes matricula:integer,estado:string,cidade:string,bairro:string
  
EXECUTAR A MIGRATION
# npx sequelize-cli db:migrate

DEPENDENCIA DO EXPRESS PARA O SERVIDOR
# npm i express
# npm i --save bcryptjs para criptografias