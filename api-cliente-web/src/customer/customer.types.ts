//Entities
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  curp?: string;
}

//Requests
export interface CustomerByIdRequest {
  id: string;
}
