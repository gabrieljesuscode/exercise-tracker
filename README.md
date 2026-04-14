
# Exercise-Tracker – Rastreamento de Exercícios

API RESTful para registro e consulta de exercícios físicos de usuários, desenvolvida como parte do currículo de APIs e Microsserviços do freeCodeCamp.

<img height="500" alt="image" src="https://github.com/user-attachments/assets/5c67e831-4ae7-4c46-996a-4e460ec13bb9" />

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB
* Mongoose

## Funcionalidades

* Criação e listagem de usuários
* Registro de exercícios associados a um usuário (descrição, duração, data)
* Consulta do histórico de exercícios de um usuário com filtros por período e limite de resultados

## Como Executar o Projeto Localmente

1. Clone este repositório:
```bash
git clone https://github.com/gabrieljesuscode/exercise-tracker.git
```

Acesse a pasta do projeto:
```bash
cd [nome-da-pasta]
```

### Instale as dependências:
```bash
npm install
```
### Configure as variáveis de ambiente (crie um arquivo .env na raiz):
```
MONGO_URI=sua_string_de_conexao_mongodb
PORT=3000
```

### Execute a aplicação:
```bash
npm start
```

Acesse no navegador ou via ferramenta de API (Insomnia/Postman):
http://localhost:3000

## Endpoints da API
Método |	Rota |	Descrição
|:--- | :--- | :---|
POST |	`/api/users` |	Cria um novo usuário
GET	| `/api/users` |	Retorna a lista de todos os usuários
POST |	`/api/users/:_id/exercises` |	Registra um exercício para o usuário
GET |	`/api/users/:_id/logs` |	Retorna o histórico de exercícios do usuário

## Exemplos de Requisição
### Criar usuário
```
POST /api/users
Content-Type: application/x-www-form-urlencoded

username=johndoe
```

<img height="86" alt="image" src="https://github.com/user-attachments/assets/54396521-c321-421e-98b3-67910c11abe0" />

### Adicionar exercício
```
POST /api/users/:_id/exercises
Content-Type: application/x-www-form-urlencoded

description=Corrida&duration=30&date=2025-04-01
```

<img height="143" alt="image" src="https://github.com/user-attachments/assets/c27f8c72-26d9-4a6d-96e1-0866b947818b" />


### Obter logs com filtros
```
GET /api/users/:_id/logs?from=2025-01-01&to=2025-12-31&limit=10
```

<img height="449" alt="image" src="https://github.com/user-attachments/assets/a3ded42b-8fe1-4a09-b88f-4e0ac5cc598a" />


### Deploy da Aplicação

A aplicação está disponível online em: [https://exercise-tracker-liard.vercel.app/](https://exercise-tracker-liard.vercel.app/)


_Este projeto foi desenvolvido para fins de estudo e portfólio._
