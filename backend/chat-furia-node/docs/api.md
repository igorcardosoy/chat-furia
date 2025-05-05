# Documentação da API - Chat Furia

## Visão Geral

A API Chat Furia permite a comunicação em tempo real entre usuários através de um sistema de chat. Utilizando Express e TypeScript, a aplicação se conecta a um banco de dados PostgreSQL para armazenar informações sobre usuários, mensagens e chats.

## Estrutura das Rotas

### 1. Autenticação

#### POST /api/auth/register

- **Descrição**: Registra um novo usuário.
- **Corpo da Requisição**:
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Resposta**:
  - **201 Created**: Usuário registrado com sucesso.
  - **400 Bad Request**: Dados inválidos.

#### POST /api/auth/login

- **Descrição**: Realiza o login de um usuário.
- **Corpo da Requisição**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Resposta**:
  - **200 OK**: Login bem-sucedido, retorna token de autenticação.
  - **401 Unauthorized**: Credenciais inválidas.

### 2. Chat

#### POST /api/chat/message

- **Descrição**: Envia uma nova mensagem em um chat.
- **Cabeçalho**:
  - `Authorization`: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "chatId": "string",
    "message": "string"
  }
  ```
- **Resposta**:
  - **201 Created**: Mensagem enviada com sucesso.
  - **400 Bad Request**: Dados inválidos.

#### GET /api/chat/messages/:chatId

- **Descrição**: Recupera todas as mensagens de um chat específico.
- **Cabeçalho**:
  - `Authorization`: Bearer {token}
- **Resposta**:
  - **200 OK**: Retorna uma lista de mensagens.
  - **404 Not Found**: Chat não encontrado.

### 3. Usuários

#### GET /api/users/:userId

- **Descrição**: Recupera o perfil de um usuário.
- **Cabeçalho**:
  - `Authorization`: Bearer {token}
- **Resposta**:
  - **200 OK**: Retorna os dados do usuário.
  - **404 Not Found**: Usuário não encontrado.

## Funcionamento

1. **Registro e Login**: Os usuários podem se registrar e fazer login para acessar a funcionalidade de chat. Um token de autenticação é gerado após o login e deve ser incluído no cabeçalho das requisições subsequentes.

2. **Envio de Mensagens**: Após a autenticação, os usuários podem enviar mensagens para chats específicos. As mensagens são armazenadas no banco de dados e podem ser recuperadas a qualquer momento.

3. **Recuperação de Mensagens**: Os usuários podem acessar o histórico de mensagens de um chat específico, permitindo uma experiência de chat contínua e em tempo real.

## Conclusão

A API Chat Furia oferece uma solução robusta para comunicação em tempo real, utilizando tecnologias modernas e um banco de dados relacional para gerenciar dados de usuários e mensagens.
