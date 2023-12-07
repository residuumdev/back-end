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

npm install mysql2 sequelize sequelize-cli swagger swagger-autogen dotenv cors

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

# CRIAR A MIGRATION coleta_peso
    npx sequelize-cli model:generate --name coleta_peso --attributes peso_em_kg:float,tipo_residuo:string

# CRIAR A MIGRATION descarte
    npx sequelize-cli model:generate --name descarte --attributes telefone:string,papel:integer,metal:integer,plastico:integer,vidro:integer,organico:integer,nao_reciclavel:integer

# CRIAR A MIGRATION quiz
    npx sequelize-cli model:generate --name quiz --attributes nome:string,telefone:string,palpite:integer
  
# EXECUTAR A MIGRATION
 npx sequelize-cli db:migrate

DEPENDENCIA DO EXPRESS PARA O SERVIDOR
# npm i express
# npm i --save bcryptjs para criptografias