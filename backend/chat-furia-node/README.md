# chat-furia

Este projeto é uma API de chat em tempo real desenvolvida com Express e TypeScript, utilizando PostgreSQL como banco de dados. O objetivo é permitir que usuários se comuniquem instantaneamente através de mensagens em um ambiente de chat.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **src/**: Contém o código-fonte da aplicação.
  - **config/**: Configurações do banco de dados e do WebSocket.
  - **controllers/**: Controladores que gerenciam a lógica de negócios para autenticação, chat e usuários.
  - **middlewares/**: Middleware para autenticação e tratamento de erros.
  - **models/**: Modelos que representam as entidades do sistema (Chat, Message, User).
  - **routes/**: Definição das rotas da API.
  - **services/**: Lógica de negócios que interage com os modelos e o banco de dados.
  - **types/**: Tipos e interfaces TypeScript utilizados na aplicação.
  - **utils/**: Utilitários, como um logger para registrar eventos.
  - **app.ts**: Inicializa a aplicação Express e configura as rotas.
  - **server.ts**: Inicia o servidor e escuta requisições.

- **docs/**: Documentação da API, incluindo detalhes sobre os endpoints.
- **tests/**: Contém testes de integração e unitários para garantir a qualidade do código.
- **.env.example**: Exemplo de variáveis de ambiente necessárias para a aplicação.
- **.eslintrc.js**: Configuração do ESLint para manter a qualidade do código.
- **.gitignore**: Arquivos e diretórios a serem ignorados pelo Git.
- **jest.config.js**: Configuração para o Jest, o framework de testes.
- **nodemon.json**: Configuração para o Nodemon, que reinicia automaticamente o servidor durante o desenvolvimento.
- **package.json**: Configuração do npm, listando dependências e scripts do projeto.
- **tsconfig.json**: Configuração do TypeScript, especificando opções do compilador e arquivos a serem incluídos na compilação.

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd chat-furia
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.example` para `.env` e preencha com suas configurações.

4. Inicie o servidor:
   ```
   npm run dev
   ```

Agora você pode acessar a API e começar a interagir com o chat em tempo real! 

## Documentação da API

A documentação detalhada das rotas e exemplos de uso pode ser encontrada em `docs/api.md`.