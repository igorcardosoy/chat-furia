export interface Chat {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ChatMessage {
    id: number;
    chatId: number;
    userId: number;
    content: string;
    createdAt: Date;
}

export interface ChatRoom {
    id: number;
    name: string;
    messages: ChatMessage[];
}