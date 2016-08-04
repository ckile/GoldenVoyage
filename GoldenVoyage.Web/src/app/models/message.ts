export class Message {
    subMessages: Array<Message>;
    id: number;

    content: string;

    postTime: Date;

    fromUserId: number;

    toUserId: number;

    constructor(param?: { content?: string, postTime?: Date }) {
        this.content = param && param.content || "";
        this.postTime = param && param.postTime || new Date();
    }
}