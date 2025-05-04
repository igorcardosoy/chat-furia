# chat-furia-frontend

This project is a real-time chat application built with Next.js and TypeScript. It provides a user-friendly interface for authentication and chat functionalities.

## Project Structure

- **public/**: Contains static assets such as images and icons.
- **src/**: The main source code of the application.
  - **components/**: Reusable UI components.
    - **auth/**: Components related to user authentication (login and registration).
    - **chat/**: Components for chat functionalities (input, messages, chat room).
    - **layout/**: Layout components for the application (header, sidebar).
    - **ui/**: Generic UI components (buttons, inputs, modals).
  - **contexts/**: Context providers for managing global state (authentication and chat).
  - **hooks/**: Custom hooks for encapsulating logic related to authentication and chat.
  - **lib/**: Library files, such as socket connection management.
  - **pages/**: Next.js pages for routing.
    - **chat/**: Chat-related pages.
    - **index.tsx**: The main landing page.
    - **login.tsx**: Login page.
    - **register.tsx**: Registration page.
  - **services/**: Services for API calls and business logic.
  - **styles/**: Global and component-specific styles.
  - **types/**: TypeScript types and interfaces used throughout the application.
  - **utils/**: Utility functions for various purposes (date formatting, validation).

## Features

- User authentication (login and registration).
- Real-time chat functionality using WebSockets.
- Responsive design for a seamless user experience.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd chat-furia-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Rename `.env.local.example` to `.env.local` and configure your environment variables.

4. Run the development server:
   ```
   npm run dev
   ```

Now you can access the application at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.