# Desafio Fontes Promotora

Bem vindos! Este repositório foi criado com o intuito de resolver o desafio proposto pela Fontes Promotora.

O objetivo era criar uma aplicação com frontend e backend.

## Tecnologias Utilizadas

Durante o desenvolvimento do projeto foram utilizadas algumas bibliotecas e ferramentas no backend:

* nodejs
* express
* nodemon

Enquanto no frontend utilizei outras ferramentas citadas abaixo:

* react
* react-modal
* react-data-table-component
* react-modal
* moment

## Executando a aplicação localmente

### Clonando o repositório

#### BACKEND

1. No seu terminal, acesse a pasta onde o repositório será clonado e execute:
```
git clone git@github.com:renanvamo/fontes-promotora.
```

2. Entre na pasta do repositório que você acabou de clonar:
```
cd fontes-promotora/backend

```

3. Instale as dependências do projeto executando no terminal:
```
npm install
```

4. Para o próximo passo, é necessário ter instalado o Docker

4.1 Primeiro vamos criar uma imagem do postgres
``` 
docker build -t mypostgres .   
```

4.2 Após criar a imagem acima, vamos executar.
```
docker run -p 5432:5432 mypostgres
```

PS: Se houver um erro informando que a porta está sendo usado, provavelmente você possui o postgres instalado, e seria necessárivel rodar o comando abaixo para parar a aplicação temporariamente.
```
sudo systemctl stop docker.service   
```

Caso não haja sucesso, você pode rodar localmente a query de criação das tabelas no arquivo "./backend/src/database/init.sql".

#### Executando a aplicação BACKEND

Execute no terminal:

```
npm run dev
```

#### Rotas da aplicação

Foram criada as rotas que foram pedidas no desafio, com uma alteração.

1. Criação de usuário

```


body {
  "name": "Nome do Usuário",
  "password": "senha",
  "username": "nome.do.usuario"
} 
```
método: POST
endpoint: "localhost:8080/users"
Retornos:
  * 201 Created - Usuário criado
  * 500 Server Error - Algum erro inesperado (Pode ser um campo inválido, faltando ou erro ao inserir no banco)

PS1: Idealmente poderia criar um retorno de status 400 (Bad Request), para casos de validação de campos, mas não tive tempo de implementar.
PS2: Aqui, diferente da proposta do desafio, como é necessário criar um usuário e o campo de password existe no banco, achei que faria sentido enviar uma senha para criar o usuário no banco de dados.

2. Criação de projeto

método: POST
endpoint: "localhost:8080/project"
Retornos:
  * 201 Created - Projeto criado
  * 500 Server Error - Algum erro inesperado

3. Atualiza projeto

método: PUT
endpoint: "localhost:8080/projects/:id"
Retornos:
  * 200 Created - Projeto atualizado
  * 304 Not Modified - Sem modificação
  * 500 Server Error - Algum erro inesperado

4. Finalizar projeto

método: PATCH
endpoint: "localhost:8080/projects/:id/done"
Retornos:
  * 200 Created - Projeto atualizado
  * 304 Not Modified - Sem modificação
  * 500 Server Error - Algum erro inesperado

5. Deletar projeto

método: DELETE
endpoint: "localhost:8080/projects/:id"
Retornos:
  * 204 No Content - Projeto apagado
  * 500 Server Error - Algum erro inesperado

6. Buscar projetos do usuário

método: GET
endpoint: "localhost:8080/projects"
Retornos:
  * 200 OK - Retorna todos os projetos daquele usuário
  * 500 Server Error - Algum erro inesperado

7. Buscar projeto daquele ID

método: GET
endpoint: "localhost:8080/project/:id"
Retornos:
  * 200 OK - Retorna o projeto daquele ID
  * 400 Bad Request - Não encontrou um projeto daquele ID
  * 500 Server Error - Algum erro inesperado

PS: Retornar 400 não deveria ocorrer, pois imaginei que se não é feita a confirmação de username pelo header, o frontend requisitaria um ID que já houvesse sido recebido, senão, eu acredito que o code ideal seria 204 (No Content)

Os bodys das requisições não foram mencionados pois são identicos aos pedidos nos requisitos.

#### FRONTEND

1. Entre na pasta do repositório que você acabou de clonar:
```
cd frontend/fontes-app

```

2. Instale as dependências do projeto executando no terminal:
```
npm install
```



#### Executando a aplicação FRONTEND

1. Após isso, vamos rodar a aplicação utilizando o comando.
``` 
npm start   
```

## Sobre o projeto

Inicialmente eu tinha a intenção de criar uma tela de login, de signup, e de gerenciamento de projetos.

Porém para criar uma tela de login, teria que criar uma rota adicional, e não teria tempo suficiente para isso, portando optei por uma tela de login que não é possível utilizar o login, ela serve apenas para redirecionar para a tela de "SignUp".

Nessa tela, você pode criar um novo usuário e será redirecionado para a tela de gerenciamento, e nela você poderá criar um novo projeto e ele será adicionado em uma tabela.

A minha idéia era separar as páginas em componentes menores, mas não tive tempo de faze-lo, também não consegui aplicar
os endpoints de atualização, finalização e deleção do projeto por conta do tempo, eu criei as chamadas para o backend, mas faltou a implementação.

minha idéia era fazer a estilização da página de gerenciamento, mas não consegui tempo hábil.

Tive pouco mais de uma semana para realizar o desafio, porém como estou em faculdade, trabalhando e esse final de semana era Páscoa, não consegui dedicar tanto tempo quanto gostaria ao desafio, mas espero ser possível fazer uma avaliação.

