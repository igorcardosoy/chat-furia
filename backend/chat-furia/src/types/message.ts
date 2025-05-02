export interface Message {
    id: number;
    chatId: number;
    userId: number;
    content: string;
    timestamp: Date;
}