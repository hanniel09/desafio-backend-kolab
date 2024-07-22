


# Desafio Backend Kolab / Backend Challenge Kolab

## Índice / Table of Contents

- [Português](#português)
- [English](#english)

---

## Português

## Sobre o Desafio

Desenvolver um crud com autenticação padrão utilizando JWT e Cookies para autorização, onde o diferencial neste crud será a requisição `GET users/tree`
onde a mesma, deve retornar uma árvore de usuários organizados pelo seu ` ParentUserId` com a lógica sendo desenvolvida no código e não utilizando demais métodos.

#### Opinão sobre o desafio
Gostei muito do desafio, propõe uma forma com que o candidato busco conhecimento tanto nas documentações como em foruns como no stack overflow, onde induz ao mesmo ter o conhecimento prévio do que está se desenvolvendo, como manter o código limpo e uma arquitetura o mais adequada possivel.

Devido a minha linguagem principal ser Java, sofri uma dificuldade com alguns bugs padrões e algumas horas com um bug que não retornava o `GET users/tree` mesmo aparentemente estando tudo corretamente, onde no final foi encontrado o erro.

## Sobre mim 

Entrei no mundo da programação na pandemia, em 2021 quando conseguir conciliar os estudos escolares com os estudos do que realmente gostava desde criança quando conheci o mundo da Tecnologia por meio de jogos; hoje em 2024, com 18 anos posso finalmente dizer que estou nesse mundo, participando de comunidades de Techs diversas, aprendendo com pessoas mais experientes e participando com opinões vezes acertivas, outras vezes sendo corrigido. Além de cursar Analise e Desenvolvimento de Sistemas na mackenzie, procuro aprender e aplicar conhecimento lendo documentações, escrevendo artigos, instigando assim a pesquisa e compreender novos conceitos e tecnologias.

## Primeiros Passos

### Instalação

```bash
### instalando todas as dependecias com npm

$ npm install 

### instalando todas as dependecias com yarn

$ yarn install
```

### Configurando o banco de dados
No arquivo `database.providers.ts` altere o banco de dados para o qual deseja usar e defina as propriedades como, type, localhost, port, username, password e database para assim, conseguir utilizar o programa em sua maquina.

```bash
# src\database\database.providers.ts

import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'db_kolab_employees',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
```


## Executando o programa

```bash
# iniciar o aplicativo com npm
$ npm run start

# iniciar o aplicativo com yarn
$ yarn start
```


## Testando o programa

Em seu navegador ou seu framework de teste de API Clients (Insomnia, Postman) e acesse a url: [http://localhost:3000](http://localhost:3000)  nesta pagina você encontrará todos os métodos da aplicação por meio do Swagger.

#### Recomendações 

Antes de explicar todos os métodos da API, gostaria de recomendar que execute o método `register` para que possa criar seu usuário e logo após utilize o método `login` para ter autorização para utilizar os demais métodos.


## Referencia da API

### Entidade User

```bash
  id: string

  username: string

  password: string

  parentUserId?: string; ### pode ser nulo

  parent?: User; ### faz referencia ao Usuário que é parente

  children?: User[]; ### faz referencia aos Filhos de determinado Usuário
```

### Métodos de autenticação 

#### Para todos os métodos é **Obrigatório** que o servidor esteja sendo executado.

#### Register

```SHELL
  POST /auth/register
```

| Parâmetro | Tipo     | Descrição                |
| :-------- | :------- | :------------------------- |
| `username, password` | `JSON` | **Obrigatório**. O servidor da API deve está sendo executado para poder ser criado um novo usuário.|

#### Login

```SHELL
  POST /auth/login
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `username, password`      | `JSON` | **Obrigatório**. Username e Password para fazer login com o usuário. |

#### Logout

```SHELL
  POST /auth/logout
```

| Parâmetro | Tipo     | Descrição                |
| :-------- | :------- | :------------------------- |
| `-` | `-` | **Obrigatório**. Estar logado com um usuário para poder ser desconectado ou será retornado **Unathorized**.|


### Métodos do Usuário

#### Retornar uma árvore dos usuários conforme o seu ParentUserId

```SHELL
  GET /users/tree
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `-`      | `-` | **Obrigatório**. Estar logado com um usuário ou será retornado **Unathorized**. |

#### Retornar um Usuário pelo seu id

```SHELL
  GET /users/:id
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `UUID` | **Obrigatório**. Estar logado com um usuário ou será retornado **Unathorized**. |

#### Atualizando um Usuário

```SHELL
  PUT /users/:id
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `Id, Body`      | `UUID, JSON` | **Obrigatório**. ID do usuário que será atualizado e Parâmetros para alterar o usuário, podendo ser alterado uma ou todos os parâmetros. Também é obrigatório de estar logado com um usuário ou será retornado **Unathorized**.|

#### Deletando um Usuário

```SHELL
  DELETE /users/:id
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `UUID` | **Obrigatório**. Id do usuário que deseja deletar e estar logado com um usuário ou será retornado **Unathorized**.|

## Tecnologias usadas

- Nestjs
- TypeScript
- TypeORM
- Swagger
- JWT
- MySql

## Encontre-me 

[Linkedin](https://www.linkedin.com/in/hannielvieira/) 

hannielvieira1227@gmail.com

---

## English

## About the Challenge

Develop a CRUD with standard authentication using JWT and Cookies for authorization. The unique aspect of this CRUD is the `GET users/tree` request, which should return a tree of users organized by their `ParentUserId`. The logic for this should be developed in code, not using additional methods.

#### Opinion about the challenge
I really liked the challenge as it encourages candidates to seek knowledge both from documentation and forums like Stack Overflow. It requires prior knowledge of what is being developed, how to keep the code clean, and an appropriate architecture.

Due to my primary language being Java, I faced some difficulty with standard bugs and spent several hours on a bug that did not return the `GET users/tree` response even though everything seemed correct. The error was eventually found.

## About me

I entered the programming world during the pandemic in 2021 when I managed to balance school studies with learning what I have liked since childhood after being introduced to the world of technology through games. Today, in 2024, at 18 years old, I can finally say that I am part of this world, participating in various tech communities, learning from more experienced people, and contributing with opinions—sometimes correct, other times being corrected. Besides studying Systems Analysis and Development at Mackenzie, I seek to learn and apply knowledge by reading documentation, writing articles, thereby encouraging research and understanding new concepts and technologies.

## Getting Started

### Installation

```bash
### Installing all dependencies with npm

$ npm install 

### Installing all dependencies with yarn

$ yarn install
```

### Configuring the database
In the `database.providers.ts` file, change the database to the one you want to use and set the properties such as type, host, port, username, password, and database to use the program on your machine.

```bash
# src\database\database.providers.ts

import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'db_kolab_employees',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
```

## Running the API

```bash
# Start the application with npm
$ npm run start

# Start the application with yarn
$ yarn start
```

## Testing the API

In your browser or your API Clients testing framework (Insomnia, Postman), access the URL: [http://localhost:3000](http://localhost:3000). On this page, you will find all the application methods through Swagger.

#### Recommendations

Before explaining all the API methods, I would recommend executing the `register` method to create your user and then use the `login` method to get authorization to use the other methods.

## API Reference

### User Entity

```bash
  id: string

  username: string

  password: string

  parentUserId?: string; ### can be null

  parent?: User; ### refers to the parent user

  children?: User[]; ### refers to the children of a particular user
```

### Authentication Methods

#### For all methods, the server must be running.

#### Register

```SHELL
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username, password` | `JSON` | **Required**. The API server must be running to create a new user.|

#### Login

```SHELL
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username, password`      | `JSON` | **Required**. Username and Password to log in with the user. |

#### Logout

```SHELL
  POST /auth/logout
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `-` | **Required**. Must be logged in to a user to log out or **Unauthorized** will be returned.|

### User Methods

#### Return a tree of users according to their ParentUserId

```SHELL
  GET /users/tree
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `-`      | `-` | **Required**. Must be logged in to a user or **Unauthorized** will be returned. |

#### Return a User by their ID

```SHELL
  GET /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `UUID` | **Required**. Must be logged in to a user or **Unauthorized** will be returned. |

#### Updating a User

```SHELL
  PUT /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID, Body`      | `UUID, JSON` | **Required**. ID of the user to be updated and parameters to change the user, which can be one or all parameters. Must be logged in to a user or **Unauthorized** will be returned.|

#### Deleting a User

```SHELL
  DELETE /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `UUID` | **Required**. ID of the user you want to delete and must be logged in to a user or **Unauthorized** will be returned.|

## Technologies used

- NestJS
- TypeScript
- TypeORM
- Swagger
- JWT
- MySQL

## Contact me

[LinkedIn](https://www.linkedin.com/in/hannielvieira/)

hannielvieira1227@gmail.com
