export interface Message {
    readonly id: number;
    readonly text: string;
    vote: number;
    readonly user_id: number;
}
