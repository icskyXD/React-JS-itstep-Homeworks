export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}