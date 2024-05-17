
interface User {
    id: string;
    email: string;
}

declare namespace Express {
    export interface Request {
        user?: User;

    }
}
