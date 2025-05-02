export interface User {
    id: number;
    username: string;
    email: string;
    password: string; // Armazenar hash da senha
    createdAt: Date;
    updatedAt: Date;
}

export interface UserProfile {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}