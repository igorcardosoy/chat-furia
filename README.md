# Chat Furia

![Chat Furia](https://img.shields.io/badge/Chat-FURIA-ff0000)
![NextJS](https://img.shields.io/badge/Frontend-NextJS_15-black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-white)

Um aplicativo de chat em tempo real para fãs da FURIA, permitindo conversas em diferentes salas temáticas como CS2, Valorant, LoL, e mais.

## 📋 Índice

- Visão Geral
- Funcionalidades
- Arquitetura
- Tecnologias Utilizadas
- Configuração de Ambiente
- Instruções de Instalação
- Estrutura do Projeto
- Banco de Dados
- API Endpoints
- Contribuição

## 🔍 Visão Geral

Chat Furia é uma plataforma de chat em tempo real para os fãs da FURIA se comunicarem em diferentes salas temáticas, cada uma dedicada a um jogo ou modalidade específica da equipe (CS2, Valorant, LoL, Rocket League e Xadrez).

O projeto é dividido em duas partes principais:

- **Frontend**: Uma aplicação NextJS com suporte a salas de chat em tempo real
- **Backend**: API Node.js usando Express, PostgreSQL e Socket.io

## ✨ Funcionalidades

### Concluídas

- Autenticação de usuários (registro e login)
- Múltiplas salas de chat temáticas
- Mensagens em tempo real usando Socket.io
- Proteção de rotas para usuários autenticados

## 🏗️ Arquitetura

O projeto segue uma arquitetura cliente-servidor:

```
                 ┌─────────────────┐
                 │    Cliente      │
                 │  Next.js (SSR)  │
                 └────────┬────────┘
                          │
                          │ HTTP/WebSocket
                          ▼
┌───────────────────────────────────────────┐
│                Servidor                   │
│  ┌────────────┐       ┌────────────────┐  │
│  │   Express  │◄─────►│   Socket.io    │  │
│  └──────┬─────┘       └────────┬───────┘  │
│         │                      │          │
│         ▼                      ▼          │
│  ┌────────────┐       ┌────────────────┐  │
│  │  Sequelize │◄─────►│ Banco de Dados │  │
│  └────────────┘       └────────────────┘  │
└───────────────────────────────────────────┘
```

## 🛠️ Tecnologias Utilizadas

### Frontend

- [Next.js](https://nextjs.org/) (v15.3.1)
- [React](https://react.dev/) (v19.0.0)
- [TypeScript](https://www.typescriptlang.org/) (v5)
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [Socket.io Client](https://socket.io/docs/v4/client-api/) (v4.8.1)
- [Axios](https://axios-http.com/) (v1.9.0)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) (v5.1.0)
- [TypeScript](https://www.typescriptlang.org/) (v5.8.3)
- [PostgreSQL](https://www.postgresql.org/) (via Sequelize)
- [Sequelize ORM](https://sequelize.org/) (v6.37.7)
- [Socket.io](https://socket.io/) (v4.8.1)
- [JWT](https://jwt.io/) para autenticação

## ⚙️ Configuração de Ambiente

### Requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- PostgreSQL

### Variáveis de Ambiente

#### Frontend (.env)

```bash
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
PORT=3000
```

#### Backend (.env)

```bash
DB_USER=username
DB_PASSWORD=password
DB_HOST=localhost
DB_NAME=chat_furia
DB_PORT=5432
JWT_SECRET=your_jwt_secret
PORT=3000
SOCKET_PORT=4000
```

## 📦 Instruções de Instalação

### Backend

```bash
# Entrar na pasta do backend
cd backend/chat-furia-node

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Executar em modo desenvolvimento
npm run dev

# Ou para produção
npm run build
npm start
```

### Frontend

```bash
# Entrar na pasta do frontend
cd frontend/chat-furia-next

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite o arquivo .env.local com suas configurações

# Executar em modo desenvolvimento
npm run dev

# Ou para produção
npm run build
npm start
```

## 📁 Estrutura do Projeto

### Frontend

```
frontend/chat-furia-next/
├── public/                # Arquivos estáticos e SVGs
├── src/
│   ├── app/               # Páginas e layouts da aplicação
│   │   ├── (auth)/        # Rotas de autenticação
│   │   ├── (home)/        # Rotas autenticadas
│   │   └── styles/        # Estilos globais
│   ├── components/        # Componentes React
│   │   ├── auth/          # Componentes de autenticação
│   │   ├── chat/          # Componentes de chat
│   │   ├── layout/        # Layout components
│   │   └── ui/            # Componentes de UI reutilizáveis
│   ├── contexts/          # React contexts
│   ├── hooks/             # React custom hooks
│   ├── services/          # Serviços de API
│   ├── types/             # TypeScript types
│   └── utils/             # Utilitários
└── tailwind.config.js     # Configuração do Tailwind
```

### Backend

```
backend/chat-furia-node/
├── dist/                # Código compilado
├── src/
│   ├── config/         # Configurações
│   ├── controllers/    # Controladores
│   ├── middlewares/    # Middlewares Express
│   ├── models/         # Modelos Sequelize
│   ├── routes/         # Definição de rotas
│   ├── services/       # Serviços
│   ├── types/          # Tipos TypeScript
│   ├── utils/          # Utilitários
│   ├── app.ts          # Configuração Express
│   └── server.ts       # Ponto de entrada
└── docs/               # Documentação
```

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com Sequelize ORM. Os principais modelos são:

- **User**: Usuários do sistema
- **Chat**: Salas de chat disponíveis
- **Message**: Mensagens enviadas pelos usuários

## 🔌 API Endpoints

### Autenticação

- `POST /auth/register` - Registro de usuário
- `POST /auth/login` - Login de usuário

### Chat

- `GET /chat/:id/messages` - Obtém mensagens de um chat
- `POST /chat/message` - Envia uma mensagem

### WebSocket

- Evento `joinChat` - Entrar em uma sala de chat
- Evento `sendMessage` - Enviar uma mensagem
- Evento `newMessage` - Receber mensagens novas

---
