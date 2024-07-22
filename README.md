


# Desafio Backend Kolab

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