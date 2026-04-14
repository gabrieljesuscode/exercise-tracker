
# Exercise-Tracker – Rastreamento de Exercícios

API RESTful para registro e consulta de exercícios físicos de usuários, desenvolvida como parte do currículo de APIs e Microsserviços do freeCodeCamp.

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
### Adicionar exercício
```
POST /api/users/:_id/exercises
Content-Type: application/x-www-form-urlencoded

description=Corrida&duration=30&date=2025-04-01
```
### Obter logs com filtros
```
GET /api/users/:_id/logs?from=2025-01-01&to=2025-12-31&limit=10
```

### Deploy da Aplicação

A aplicação está disponível online em: [Link da Vercel, Render ou similar]

Licença
Este projeto foi desenvolvido para fins de estudo e portfólio.
