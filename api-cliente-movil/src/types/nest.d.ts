interface User {
  id: string;
  email: string;
  curp?: string;
  nombres?: string;
  apellidos?: string;
}

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
